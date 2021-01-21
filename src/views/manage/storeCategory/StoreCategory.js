import React from "react";

import {
  CDataTable,
  CContainer,
  CButton,
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
} from "@coreui/react";

import { useDispatch, useSelector } from "react-redux";
import {
  CALL_ALL_DATA_API_REQ,
  IS_OPEN_MODAL_REQ,
} from "../../../actionType";
import CreateForm from "./component/CreateForm";
import EditForm from "./component/EditForm";

const fields = [
  { key: "#" },
  { key: "name" },
  { key: "detail" },
  {
    key: "action",
    sorter: false,
    filter: false,
  },
];

export default function StoreCategory() {
  //--redux && redux-saga
  const dispatch = useDispatch();
  const dataApi = useSelector(({ setDataApi }) => setDataApi.data);
  const action = (type, payload) => dispatch({ type, payload });
  //--end redux && redux-saga
  console.log('dataApi', dataApi)

  React.useEffect(() => {
    action(CALL_ALL_DATA_API_REQ, "Store/getAll");
  }, []);

  return (
    <div>
      <CContainer fluid>
        <CRow>
          <CCol sm="12">
            <CCard>
              <CCardHeader>
                <strong>Store information</strong>
                <div className="card-header-actions">
                  <CButton
                    color="info"
                    size="sm"
                    onClick={() => {
                      action(IS_OPEN_MODAL_REQ, {
                        isModal: true,
                        component: <CreateForm />,
                        modalHeader: "Add Store",
                      });
                    }}
                  >
                    Add +
                  </CButton>
                </div>
              </CCardHeader>
              <CCardBody>
                {dataApi && (
                  <CDataTable
                    items={dataApi}
                    fields={fields}
                    tableFilter
                    itemsPerPageSelect
                    itemsPerPage={10}
                    hover
                    sorter
                    pagination
                    scopedSlots={{
                      "#": (item, index) => <td>{index + 1}</td>,
                      action: (item) => (
                        <td>
                          <CButton
                            className="mr-2"
                            color="warning"
                            size="sm"
                            onClick={() => {
                              console.log("edit btn", item.id);
                              // action(GET_ID_DATA_API_REQ, item.id);
                              action(IS_OPEN_MODAL_REQ, {
                                isModal: true,
                                component: <EditForm id={item.id} />,
                                modalHeader: "Edit Store",
                              });
                            }}
                          >
                            edit
                          </CButton>

                          <CButton
                            color="danger"
                            size="sm"
                            onClick={() => {
                              console.log("delete btn", item.id);
                            }}
                          >
                            delete
                          </CButton>
                        </td>
                      ),
                    }}
                  />
                )}
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}

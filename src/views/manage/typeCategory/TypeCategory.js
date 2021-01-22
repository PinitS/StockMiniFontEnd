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
  DELETE_DATA_API_REQ,
  IS_OPEN_MODAL_REQ,
  GET_DROPDOWN_DATA_API_REQ
} from "../../../actionType";
import CreateForm from "./component/CreateForm";
import EditForm from "./component/EditForm";

const fields = [
  { key: "#" },
  { key: "name" },
  { key: "category" },
  { key: "detail" },
  {
    key: "action",
    sorter: false,
    filter: false,
  },
];

export default function TypeCategory() {
  const dispatch = useDispatch();
  const dataApi = useSelector(({ setDataApi }) => setDataApi.data);
  const action = (type, payload) => dispatch({ type, payload });
  //--end redux && redux-saga
  console.log("dataApi", dataApi);

  React.useEffect(() => {
    action(CALL_ALL_DATA_API_REQ, "Type/getAll");
    action(GET_DROPDOWN_DATA_API_REQ, "Other/getAllDropDown");
  }, []);

  return (
    <div>
      <CContainer fluid>
        <CRow>
          <CCol sm="12">
            <CCard>
              <CCardHeader>
                <strong>Type information</strong>
                <div className="card-header-actions">
                  <CButton
                    color="info"
                    size="sm"
                    onClick={() => {
                      action(IS_OPEN_MODAL_REQ, {
                        isModal: true,
                        component: <CreateForm />,
                        modalHeader: "Add Type",
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
                                modalHeader: "Edit Type",
                              });
                            }}
                          >
                            edit
                          </CButton>

                          {item.delete_active && (
                            <CButton
                              color="danger"
                              size="sm"
                              onClick={() => {
                                console.log("delete btn", item.id);
                                action(DELETE_DATA_API_REQ, {
                                  path: "Type/",
                                  subPath: "delete/" + item.id,
                                });
                              }}
                            >
                              delete
                            </CButton>
                          )}
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

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
import { IS_OPEN_MODAL_REQ } from "src/sagaType/modal";
import { TYPE_CALL_ALL_DATA_API_REQ, TYPE_DELETE_DATA_API_REQ } from "src/sagaType/typeManager";
import { GET_DROPDOWN_DATA_API_REQ } from "src/sagaType/allDropdown";

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
  const data = useSelector(({ setTypeManage }) => setTypeManage.data);
  const action = (type, payload) => dispatch({ type, payload });
  //--end redux && redux-saga
  React.useEffect(() => {
    action(TYPE_CALL_ALL_DATA_API_REQ);
    action(GET_DROPDOWN_DATA_API_REQ);
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
                        size: "lg",
                      });
                    }}
                  >
                    Add +
                  </CButton>
                </div>
              </CCardHeader>
              <CCardBody>
                {data && (
                  <CDataTable
                    items={data}
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
                              action(IS_OPEN_MODAL_REQ, {
                                isModal: true,
                                component: <EditForm id={item.id} />,
                                modalHeader: "Edit Type",
                                size: "lg",
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
                                action(TYPE_DELETE_DATA_API_REQ, {
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

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

import CreateForm from "./component/CreateForm";
import EditForm from "./component/EditForm";
import { IS_OPEN_MODAL_REQ } from "src/sagaType/modal";
import { CATEGORY_CALL_ALL_DATA_API_REQ, CATEGORY_DELETE_DATA_API_REQ } from "src/sagaType/category";
import { GET_DROPDOWN_DATA_API_REQ } from "src/sagaType/allDropdown";

const fields = [
  { key: "#" },
  { key: "name" },
  { key: "store" },
  { key: "mainCategory" },
  { key: "detail" },
  {
    key: "action",
    sorter: false,
    filter: false,
  },
];
export default function Category() {
  //--redux && redux-saga
  const dispatch = useDispatch();
  const data = useSelector(({ setCategory }) => setCategory.data);

  const action = (type, payload) => dispatch({ type, payload });
  //--end redux && redux-saga
  React.useEffect(() => {
    action(CATEGORY_CALL_ALL_DATA_API_REQ);
    action(GET_DROPDOWN_DATA_API_REQ);
  }, []);
  return (
    <div>
      <CContainer fluid>
        <CRow>
          <CCol sm="12">
            <CCard>
              <CCardHeader>
                <strong>Category information</strong>
                <div className="card-header-actions">
                  <CButton
                    color="info"
                    size="sm"
                    onClick={() => {
                      action(IS_OPEN_MODAL_REQ, {
                        isModal: true,
                        component: <CreateForm />,
                        modalHeader: "Add Category",
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
                                modalHeader: "Edit Category",
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
                                action(CATEGORY_DELETE_DATA_API_REQ, {
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

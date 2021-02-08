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
import {
  MAIN_CATEGORY_CALL_ALL_DATA_API_REQ,
  MAIN_CATEGORY_DELETE_DATA_API_REQ,
} from "src/sagaType/mainCategory";
import { IS_OPEN_MODAL_REQ } from "src/sagaType/modal";

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

export default function MainCategory() {
  //--redux && redux-saga
  const dispatch = useDispatch();
  const data = useSelector(({ setMainCategory }) => setMainCategory.data);
  const action = (type, payload) => dispatch({ type, payload });
  //--end redux && redux-saga

  React.useEffect(() => {
    action(MAIN_CATEGORY_CALL_ALL_DATA_API_REQ);
  }, []);

  return (
    <div>
      <CContainer fluid>
        <CRow>
          <CCol sm="12">
            <CCard>
              <CCardHeader>
                <strong>Main Category information</strong>
                <div className="card-header-actions">
                  <CButton
                    color="info"
                    size="sm"
                    onClick={() => {
                      action(IS_OPEN_MODAL_REQ, {
                        isModal: true,
                        component: <CreateForm />,
                        modalHeader: "Add MainCategory",
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
                              console.log("edit btn", item.id);
                              action(IS_OPEN_MODAL_REQ, {
                                isModal: true,
                                component: <EditForm id={item.id} />,
                                modalHeader: "Edit MainCategory",
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
                                console.log("delete btn", item.id);
                                action(MAIN_CATEGORY_DELETE_DATA_API_REQ, {
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

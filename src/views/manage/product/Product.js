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
  CBadge,
} from "@coreui/react";

import { useDispatch, useSelector } from "react-redux";
import { PRODUCT_CALL_ALL_DATA_API_REQ, PRODUCT_DELETE_DATA_API_REQ, PRODUCT_UPDATE_DATA_API_REQ } from "src/sagaType/product";
import { GET_DROPDOWN_DATA_API_REQ } from "src/sagaType/allDropdown";
import { IS_OPEN_MODAL_REQ } from "src/sagaType/modal";
import CreateForm from "./component/CreateForm";
import EditForm from "./component/EditForm";

const fields = [
  { key: "#" },
  { key: "name" },
  { key: "type" },
  { key: "price" },
  { key: "amount" },
  { key: "active" },
  { key: "sku" },
  { key: "detail" },
  { key: "img" },
  {
    key: "action",
    sorter: false,
    filter: false,
  },
];

export default function Product() {
  const dispatch = useDispatch();
  const data = useSelector(({ setProduct }) => setProduct.data);
  const action = (type, payload) => dispatch({ type, payload });
  const verticalMiddleStyle = { verticalAlign: "middle" };
  //--end redux && redux-saga
  // console.log("data", data);

  const color = ["primary", "danger"];
  const onChangeStatus = (input) => {
    action(PRODUCT_UPDATE_DATA_API_REQ, {
      input: input,
      path: "Product/",
      subPath: "changeActive",
    });
  };

  React.useEffect(() => {
    action(PRODUCT_CALL_ALL_DATA_API_REQ);
    action(GET_DROPDOWN_DATA_API_REQ);
  }, []);

  return (
    <div>
      <CContainer fluid>
        <CRow>
          <CCol sm="12">
            <CCard>
              <CCardHeader>
                <strong>Products information</strong>
                <div className="card-header-actions">
                  <CButton
                    color="info"
                    size="sm"
                    onClick={() => {
                      action(IS_OPEN_MODAL_REQ, {
                        isModal: true,
                        component: <CreateForm />,
                        modalHeader: "Add Product",
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
                    style={verticalMiddleStyle}
                    tableFilter
                    itemsPerPageSelect
                    itemsPerPage={10}
                    hover
                    sorter
                    pagination
                    scopedSlots={{
                      // "#": (item, index) => (
                      //   <td style={verticalMiddleStyle}>{index + 1}</td>
                      // ), // ทำให้ตรงกลางในแนวตั้ง
                      "#": (item, index) => <td>{index + 1}</td>,

                      active: (item, index) => (
                        <td>
                          {item.active == 1 ? (
                            <CBadge className="mr-1" color="success">
                              active
                            </CBadge>
                          ) : (
                            <CBadge className="mr-1" color="danger">
                              No active
                            </CBadge>
                          )}
                        </td>
                      ),

                      img: (item, index) => {
                        return (
                          <td key={index}>
                            <img src={item.img} />
                          </td>
                        );
                      },

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
                                modalHeader: "Edit Product",
                                size: "lg",
                              });
                            }}
                          >
                            edit
                          </CButton>

                          <CButton
                            color="danger"
                            size="sm"
                            className="mr-2"
                            onClick={() => {
                              action(PRODUCT_DELETE_DATA_API_REQ, {
                                subPath: "delete/" + item.id,
                              });
                            }}
                          >
                            delete
                          </CButton>

                          <CButton
                            id={item.id}
                            name={item.id}
                            size="sm"
                            color={color[item.active]}
                            onClick={() => {
                              let input = {
                                id: item.id,
                                active: Math.abs(item.active - 1),
                              };
                              onChangeStatus(input);
                            }}
                          >
                            {item.active == 1 ? "ON" : "OFF"}
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

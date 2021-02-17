import React from "react";

import {
  CDataTable,
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Filter from "./components/Filter";
import { PRODUCT_CALL_FILTER_DATA_API_REQ } from "src/sagaType/productStock";
import { IS_OPEN_MODAL_REQ } from "src/sagaType/modal";
import ManageProduct from "./components/ManageProduct";
import History from "./components/History";
import { CLEAR_PRODUCT_HISTORY_DATA_API_REQ } from "src/sagaType/productHistory";
const fields = [
  { key: "#" },
  { key: "name" },
  { key: "type" },
  { key: "price" },
  { key: "amount" },
  { key: "sku" },
  { key: "detail" },
  { key: "img" },
  {
    key: "action",
    sorter: false,
    filter: false,
  },
];

export default function ImportWithdraw() {
  const dispatch = useDispatch();
  const action = (type, payload) => dispatch({ type, payload });
  const data = useSelector(({ setProductFilter }) => setProductFilter.data);
  //--end redux && redux-saga
  const { register, handleSubmit, errors } = useForm({});
  React.useEffect(() => {
    action(PRODUCT_CALL_FILTER_DATA_API_REQ, {
      input: { store_id: 0, mainCategory_id: 0, category_id: 0, type_id: 0 },
    });
  }, []);
  return (
    <div>
      <CContainer fluid>
        <CRow>
          <CCol sm="12">
            <Filter />
          </CCol>
          <CCol sm="12">
            <CCard>
              <CCardHeader>
                <strong>ImportWithdraw information</strong>
                <div className="card-header-actions"></div>
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
                            color="info"
                            size="sm"
                            onClick={() => {
                              console.log("edit btn", item.id);
                              action(IS_OPEN_MODAL_REQ, {
                                isModal: true,
                                component: (
                                  <ManageProduct
                                    mode={1}
                                    id={item.id}
                                    amount={item.amount}
                                  />
                                ),
                                modalHeader: "Import Product",
                                size: "lg",
                              });
                            }}
                          >
                            <CIcon name="cil-pencil" />
                          </CButton>

                          <CButton
                            className="mr-2"
                            color="danger"
                            size="sm"
                            onClick={() => {
                              action(IS_OPEN_MODAL_REQ, {
                                isModal: true,
                                component: (
                                  <ManageProduct
                                    mode={0}
                                    id={item.id}
                                    amount={item.amount}
                                  />
                                ),
                                modalHeader: "Withdraw Product",
                                size: "lg",
                              });
                            }}
                          >
                            <CIcon name="cilSettings" />
                          </CButton>

                          <CButton
                            className="mr-2"
                            color="secondary"
                            size="sm"
                            onClick={() => {
                              action(CLEAR_PRODUCT_HISTORY_DATA_API_REQ);
                              action(IS_OPEN_MODAL_REQ, {
                                isModal: true,
                                component: <History id={item.id} />,
                                modalHeader: "History Product",
                                size: "xl",
                              });
                            }}
                          >
                            <CIcon name="cil-chart-pie" />
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

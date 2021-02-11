import React from "react";
import {
  CDataTable,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CRow,
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CTabs,
  CTabContent,
  CTabPane,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import CIcon from "@coreui/icons-react";
import { CALL_ITEM_CART_REQ, DELETE_ITEM_IN_CART_REQ } from "src/sagaType/cart";
import { IS_OPEN_MODAL_REQ } from "src/sagaType/modal";
import AmountForm from "./components/AmountForm";

const fields = [
  { key: "#" },
  { key: "name" },
  { key: "amount" },
  { key: "price" },
  { key: "sum_price", label: "sum" },
  {
    key: "action",
    sorter: false,
    filter: false,
  },
];

const fieldsOrder = [
  { key: "#", lable: "" },
  { key: "name", lable: "" },
  { key: "amount", lable: "" },
  { key: "price", lable: "" },
  { key: "sum_price", label: "sum" },
  {
    key: "action",
    sorter: false,
    filter: false,
  },
];

export default function Cart() {
  const dispatch = useDispatch();
  const action = (type, payload) => {
    dispatch({ type, payload });
  };

  const dataCart = useSelector(({ setCart }) => setCart.data);
  const dataCartSum = useSelector(({ setCart }) => setCart.sum);
  const redirect = useSelector(({ setCashier }) => setCashier.input);
  const dataOrder = useSelector(({ setOrder }) => setOrder.data);

  const deleteDataCart = (order_id, product_id) => {
    action(DELETE_ITEM_IN_CART_REQ, {
      subPath: "delete/" + order_id + "/" + product_id,
      user_id: 1,
      redirect: redirect,
    });
  };

  React.useEffect(() => {
    action(CALL_ITEM_CART_REQ, {
      input: { user_id: 1 },
    });
  }, []);

  console.log("dataOrder", dataOrder);

  return (
    <div>
      <CCard>
        <CCardBody>
          <CTabs activeTab="cart">
            <CNav variant="tabs">
              <CNavItem>
                <CNavLink data-tab="cart">Cart</CNavLink>
              </CNavItem>
              {dataOrder.map((item, index) => (
                <CNavItem key={index}>
                  <CNavLink data-tab={index}>Order : {item.order_id}</CNavLink>
                </CNavItem>
              ))}
            </CNav>
            <CTabContent>
              <CTabPane data-tab="cart">
                {dataCart && (
                  <CDataTable
                    items={dataCart}
                    fields={fields}
                    scopedSlots={{
                      "#": (item, index) => <td>{index + 1}</td>,
                      action: (item) => (
                        <td>
                          <CButton
                            className="mr-2"
                            color="danger"
                            size="sm"
                            onClick={() => {
                              deleteDataCart(item.order_id, item.product_id);
                            }}
                          >
                            <CIcon name="cilXCircle" />
                          </CButton>
                          <CButton
                            className="mr-2"
                            color="info"
                            size="sm"
                            onClick={() => {
                              action(IS_OPEN_MODAL_REQ, {
                                isModal: true,
                                component: <AmountForm item={item} />,
                                modalHeader: "Change Amount",
                                size: "lg",
                              });
                            }}
                          >
                            <CIcon name="cilPuzzle" />
                          </CButton>
                        </td>
                      ),
                    }}
                  />
                )}
                {dataCartSum && (
                  <div>
                    <CRow>
                    <CCol md="6">
                        <strong> All Amount : {dataCartSum.sum_all_amount}</strong>
                        <br />
                        <strong>All Price : {dataCartSum.sum_all_price}</strong>
                      </CCol>
                    </CRow>
                  </div>
                )}
              </CTabPane>
            </CTabContent>
            {dataOrder.map((item, index) => (
              <CTabContent key={index}>
                <CTabPane data-tab={index}>
                  <CDataTable
                    items={item.data}
                    fields={fieldsOrder}
                    itemsPerPage={10}
                    pagination
                    striped
                    scopedSlots={{
                      "#": (item, index) => <td>{index + 1}</td>,
                    }}
                  />
                  <div>
                    <CRow>
                      <CCol md="6">
                        <strong>All Amount : {item.sum.sum_all_amount}</strong>
                        <br />
                        <strong>All Price : {item.sum.sum_all_price}</strong>
                      </CCol>
                      <CCol md="6">
                        {(
                          <CButton
                            className="float-right mt-1 mt-2"
                            color="warning"
                            size="sm"
                            onClick={() => {
                              console.log(item.order_id);
                            }}
                          >
                            <strong>Check bill</strong>
                          </CButton>
                        )}
                      </CCol>
                    </CRow>
                  </div>
                </CTabPane>
              </CTabContent>
            ))}
          </CTabs>
        </CCardBody>
      </CCard>
    </div>
  );
}

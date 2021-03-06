import React, { useRef } from "react";

import { useReactToPrint } from "react-to-print";

import {
  CDataTable,
  CCard,
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
  CBadge,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import CIcon from "@coreui/icons-react";
import { CALL_ITEM_CART_REQ, DELETE_ITEM_IN_CART_REQ } from "src/sagaType/cart";
import { IS_OPEN_MODAL_REQ } from "src/sagaType/modal";
import AmountForm from "./components/AmountForm";
import {
  colorConfigColor,
  colorConfigText,
} from "../../../../static/colorConfig";
import PrintCartOrder from "./components/PrintCartOrder";
import { CHANGE_STATUS_ORDER_REQ } from "src/sagaType/order";

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
  { key: "#" },
  { key: "name" },
  { key: "amount" },
  { key: "price" },
  { key: "sum_price" },
  { key: "status" },
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

  console.log("dataOrder", dataOrder);

  const [data, setData] = React.useState(null);
  const [sum, setSum] = React.useState(null);
  const [order, setOrder] = React.useState(null);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const onSubmit = (id) => {
    let input = {
      id: id,
      status: 3,
    };
    console.log("input", input);

    action(CHANGE_STATUS_ORDER_REQ, { input: input, user_id: 1 });
  };

  React.useEffect(() => {
    setData(null);
    action(CALL_ITEM_CART_REQ, {
      input: { user_id: 1 },
    });
  }, []);

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
                  <CNavLink data-tab={index}>Order : {item.order.id}</CNavLink>
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
                        <strong>
                          {" "}
                          All Amount : {dataCartSum.sum_all_amount}
                        </strong>
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
                      status: (item, index) => (
                        <td>
                          <CBadge color={colorConfigColor[item.status]}>
                            {colorConfigText[item.status]}
                          </CBadge>
                        </td>
                      ),
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
                        {item.order.status == 2 && (
                          <CButton
                            className="float-right mt-1 mt-2"
                            color="warning"
                            size="sm"
                            onClick={() => {
                              setData(item.data);
                              setSum(item.sum);
                              setOrder(item.order.id);
                              handlePrint();
                              onSubmit(item.order.id);
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
          <div style={{ display: "none" }}>
            <PrintCartOrder
              data={data}
              sum={sum}
              order={order}
              ref={componentRef}
            />
          </div>
        </CCardBody>
      </CCard>
    </div>
  );
}

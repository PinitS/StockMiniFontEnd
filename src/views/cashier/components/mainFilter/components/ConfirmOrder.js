import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { CRow, CCol, CButton, CBadge } from "@coreui/react";
import { CHANGE_STATUS_ORDER_REQ } from "src/sagaType/order";

export default function ConfirmOrder() {
  const dataCart = useSelector(({ setCart }) => setCart.data);
  const orderCart = useSelector(({ setCart }) => setCart.order);
  const dispatch = useDispatch();
  const action = (type, payload) => dispatch({ type, payload });

  const onSubmit = () => {
    let input = {
      id: orderCart.id,
      status: 1,
    };
    action(CHANGE_STATUS_ORDER_REQ, {
      input: input,
      user_id: 1,
    });
  };

  return (
    <div>
      <CRow>
        <CCol col="6">
          <h2 className="ml-1">
            {orderCart && <strong>Order : {orderCart.id}</strong>}
          </h2>
        </CCol>
        <CCol col="6">
          <CButton
            color="primary float-right mt-1"
            disabled={
              dataCart == undefined || dataCart.length == 0 ? true : false
            }
            onClick={() => {
              onSubmit();
            }}
          >
            confirm order
          </CButton>
        </CCol>
      </CRow>
    </div>
  );
}

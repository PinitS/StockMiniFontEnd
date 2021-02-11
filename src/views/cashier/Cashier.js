import React from "react";

import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CFormGroup,
} from "@coreui/react";

import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/cart/Cart";
import Products from "./components/Products";
import { GET_DROPDOWN_DATA_API_REQ } from "src/sagaType/allDropdown";
import { CASHIER_CALL_FILTER_DATA_API_REQ } from "src/sagaType/cashier";
import MainFilter from "./components/mainFilter/MainFilter";
import { ORDER_CALL_BY_ID_DATA_API_REQ } from "src/sagaType/order";

export default function Cashier() {
  const dispatch = useDispatch();
  const action = (type, payload) => dispatch({ type, payload });
  React.useEffect(() => {
    action(GET_DROPDOWN_DATA_API_REQ);
    action(CASHIER_CALL_FILTER_DATA_API_REQ, {
      input: { main_category_id: 0, product_name: null },
    });
    action(ORDER_CALL_BY_ID_DATA_API_REQ, {
      user_id: 1,
    });
  }, []);

  return (
    <div>
      <CContainer fluid>
        <CRow>
          <CCol sm="12">
            <CCard>
              <CCardBody>
                <MainFilter />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="7">
            <Products />
          </CCol>
          <CCol sm="5">
            <Cart />
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}

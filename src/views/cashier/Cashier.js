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

import Filter from "./components/Filter";
import Cart from "./components/Cart";
import Products from "./components/Products";
import { GET_DROPDOWN_DATA_API_REQ } from "src/sagaType/allDropdown";
import { CASHIER_CALL_FILTER_DATA_API_REQ } from "src/sagaType/cashier";

export default function Cashier() {
  const dispatch = useDispatch();
  const action = (type, payload) => dispatch({ type, payload });
  const dataCart = useSelector(({ setCart }) => setCart.data);
console.log('dataCart', dataCart)
  React.useEffect(() => {
    action(GET_DROPDOWN_DATA_API_REQ);
    if (dataCart.length == 0) {
      console.log("no cart");
    } else {
      console.log("has cart");
    }
    action(CASHIER_CALL_FILTER_DATA_API_REQ, {
      input: { main_category_id: 0, product_name: null },
    });
  }, []);

  return (
    <div>
      <CContainer fluid>
        <CRow>
          <CCol sm="12">
            <CCard>
              <CCardBody>
                <CFormGroup>
                  <Filter />
                </CFormGroup>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <Products />
      </CContainer>
    </div>
  );
}

import React from "react";

import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CButton,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_STORE_REQ } from "src/sagaType/selectStore";
import StoreOrder from "./components/StoreOrder";
import { CLEAR_STORE_ORDER_REQ, GET_STORE_ORDER_REQ } from "src/sagaType/storeOrder";
import ConfirmStoreOrder from "./components/ConfirmStoreOrder";

export default function MainTable() {
  const setSelStore = useSelector(({ setSelectStore }) => setSelectStore.store);
  const dispatch = useDispatch();

  const action = (type, payload) => dispatch({ type, payload });

  
  React.useEffect(() => {
    //reuse
    action(GET_STORE_ORDER_REQ, { store_id: setSelStore });
    action(CLEAR_STORE_ORDER_REQ);
    //reuse
  }, []);

  return (
    <div>
      <CContainer fluid>
        <CRow>
          <CCol sm="12">
            <CCard>
              <CCardBody>
                <strong>Order in Store information : {setSelStore} </strong>
                <div className="card-header-actions">
                  <CButton
                    color="info"
                    size="sm"
                    onClick={() => {
                      action(SELECT_STORE_REQ, null);
                      action(GET_STORE_ORDER_REQ, { store_id: null });
                    }}
                  >
                    Exit
                  </CButton>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="7"><StoreOrder/></CCol>
          <CCol sm="5"><ConfirmStoreOrder/></CCol>
        </CRow>
      </CContainer>
    </div>
  );
}

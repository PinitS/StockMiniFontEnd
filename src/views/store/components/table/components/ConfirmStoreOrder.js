import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CDataTable,
  CButton,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_STATUS_STORE_ORDER_REQ } from "src/sagaType/storeOrder";
import PrintStoreOrder from "./PrintStoreOrder";

export default function ConfirmStoreOrder() {
  const setCartStoreOrder = useSelector(
    ({ setCartStoreOrder }) => setCartStoreOrder
  );
  const dispatch = useDispatch();
  const action = (type, payload) => dispatch({ type, payload });

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const fields = [
    { key: "#" },
    { key: "order_id", label: "Order" },
    { key: "name" },
    { key: "amount" },
  ];

  const updateToDataBase = () => {
    console.log("setCartStoreOrder.id", setCartStoreOrder.id);
    action(UPDATE_STATUS_STORE_ORDER_REQ, setCartStoreOrder.id);
  };
  return (
    <div>
      <CCard>
        <CCardHeader>
          <strong>Store Cart</strong>
          <div className="card-header-actions">
            <CButton
              color="success"
              size="sm"
              disabled={setCartStoreOrder.data.length == 0 ? true : false}
              onClick={() => {
                handlePrint();
                updateToDataBase();
              }}
            >
              Checked
            </CButton>
          </div>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            items={setCartStoreOrder.data}
            fields={fields}
            striped
            border
            scopedSlots={{
              "#": (item, index) => <td>{index + 1}</td>,
            }}
          />
        </CCardBody>
      </CCard>
      <div style={{ display: "none" }}>
        <PrintStoreOrder value={setCartStoreOrder.data} ref={componentRef} />
      </div>
    </div>
  );
}

import React from "react";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CDataTable,
  CButton,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_STATUS_STORE_ORDER_REQ } from "src/sagaType/storeOrder";

export default function ConfirmStoreOrder() {
  const setCartStoreOrder = useSelector(
    ({ setCartStoreOrder }) => setCartStoreOrder
  );
  const dispatch = useDispatch();
  const action = (type, payload) => dispatch({ type, payload });

  const fields = [
    { key: "#" },
    { key: "order_id", label: "Order" },
    { key: "name" },
    { key: "amount" },
    { key: "status" },
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
    </div>
  );
}

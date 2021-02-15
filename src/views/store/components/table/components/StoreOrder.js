import React from "react";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CDataTable,
  CButton,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import CIcon from "@coreui/icons-react";
import { ADD_TO_CART_STORE_ORDER, DEL_STORE_ORDER_REQ } from "src/sagaType/storeOrder";

export default function StoreOrder() {
  const setStoreOrder = useSelector(({ setStoreOrder }) => setStoreOrder.data);
  const dispatch = useDispatch();
  const action = (type, payload) => dispatch({ type, payload });

  const fields = [
    { key: "#" },
    { key: "order_id", label: "Order" },
    { key: "name" },
    { key: "amount" },
    { key: "status" },
    {
      key: "action",
      sorter: false,
      filter: false,
    },
  ];

  const addToOrderStoreCart = (item) => {
    action(ADD_TO_CART_STORE_ORDER , item)
    action(DEL_STORE_ORDER_REQ , item.id)
  };
  return (
    <div>
      <CCard>
        <CCardHeader>
          <strong>Order in Store</strong>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            items={setStoreOrder}
            fields={fields}
            hover
            sorter
            columnFilter
            scopedSlots={{
              "#": (item, index) => <td>{index + 1}</td>,
              action: (item, index) => (
                <td>
                  <CButton
                    className="mt-2"
                    type="submit"
                    size="sm"
                    color="warning"
                    onClick={() => {
                      addToOrderStoreCart(item);
                    }}
                  >
                    <CIcon name="cil-scrubber" />
                  </CButton>
                </td>
              ),
            }}
          />
        </CCardBody>
      </CCard>
    </div>
  );
}

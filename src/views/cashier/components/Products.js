import React from "react";

import {
  CDataTable,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CCol,
  CRow,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import CIcon from "@coreui/icons-react";
import { ADD_ITEM_TO_CART_REQ, CALL_ITEM_CART_REQ } from "src/sagaType/cart";
import { CASHIER_CALL_FILTER_DATA_API_REQ } from "src/sagaType/cashier";

const fields = [
  { key: "#" },
  { key: "name" },
  { key: "price" },
  { key: "sku" },
  { key: "img" },
  { key: "amount" },

  {
    key: "action",
    sorter: false,
    filter: false,
  },
];

export default function Products() {
  const dispatch = useDispatch();
  const action = (type, payload) => dispatch({ type, payload });
  const data = useSelector(({ setCashier }) => setCashier.data);
  const redirect = useSelector(({ setCashier }) => setCashier.input);
  const [state, setState] = React.useState(0);

  const onAddToCart = (id) => {
    let input = {
      user_id: 1,
      product_id: id,
    };
    action(ADD_ITEM_TO_CART_REQ, { input: input });
    action(CASHIER_CALL_FILTER_DATA_API_REQ, {
      input: redirect,
    });
    action(CALL_ITEM_CART_REQ, {
      input: { user_id: 1 },
    });
  };

  React.useEffect(() => {}, []);

  return (
    <div>
      <CCard>
        <CCardHeader>
          <strong>Products</strong>
        </CCardHeader>
        <CCardBody>
          {data && (
            <CDataTable
              items={data}
              fields={fields}
              sorter
              scopedSlots={{
                "#": (item, index) => <td>{index + 1}</td>,
                img: (item, index) => {
                  return (
                    <td key={index}>
                      <img src={item.img} />
                    </td>
                  );
                },
                action: (item) => {
                  return (
                    <td>
                      <CButton
                        disabled={item.amount <= 0 ? true : false}
                        className="mr-2"
                        color="info"
                        size="sm"
                        onClick={() => {
                          onAddToCart(item.id);
                        }}
                      >
                        <CIcon name="cil-bell" />
                      </CButton>
                    </td>
                  );
                },
              }}
            />
          )}
        </CCardBody>
      </CCard>
    </div>
  );
}

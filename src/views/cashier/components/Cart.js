import React from "react";

import {
  CDataTable,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import CIcon from "@coreui/icons-react";

const fields = [
  { key: "#" },
  { key: "name" },
  { key: "amount" },
  { key: "price" },
  {
    key: "action",
    sorter: false,
    filter: false,
  },
];

export default function Cart(props) {
  const dispatch = useDispatch();
  const action = (type, payload) => dispatch({ type, payload });
  const dataCart = useSelector(({ setCart }) => setCart.data);
  const [state, setState] = React.useState(0);

  const deleteDataCart = (id) => {
    const objIndex = dataCart.findIndex((obj) => obj.id == id);
    console.log("dataCart[objIndex]", dataCart[objIndex]);
    dataCart.splice(objIndex, 1);
    console.log("dataCart", dataCart);
    setState((state + 1));
  };

  return (
    <div>
      <CCard>
        <CCardHeader>
          <strong>Cart</strong>
        </CCardHeader>
        <CCardBody>
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
                        deleteDataCart(item.id);
                      }}
                    >
                      <CIcon name="cilXCircle" />
                    </CButton>
                  </td>
                ),
              }}
            />
          )}
        </CCardBody>
      </CCard>
    </div>
  );
}

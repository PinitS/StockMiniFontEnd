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
import { ADD_ITEM_TO_CART_REQ } from "src/sagaType/cart";
import Cart from "./Cart";
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
  const dataCart = useSelector(({ setCart }) => setCart.data);
  let cart = dataCart;
  let newCashier = data;

  const findObject = (id) => data.filter((item) => item.id === id)[0];
  const findCart = (id) => cart.filter((item) => item.id === id)[0];
  const [state, setState] = React.useState(0);

  const onAddToCart = (id) => {
    console.log("newCashier", newCashier);
    const data = findObject(id);
    const product_cart = { id: data.id, name: data.name, price: data.price };
    const dataInCart = findCart(product_cart.id);
    const objIndex = newCashier.findIndex((obj) => obj.id == id);

    if (dataInCart == undefined) {
      product_cart.amount = 1;
      cart.push(product_cart);
    } else {
      for (let index = 0; index < cart.length; index++) {
        if (cart[index].id == product_cart.id) {
          cart[index].amount += 1;
        }
      }
    }
    newCashier[objIndex].amount -= 1;

    setState(state + 1);
    action(ADD_ITEM_TO_CART_REQ, cart);
  };

  React.useEffect(() => {

  }, []);

  return (
    <div>
      <CRow>
        <CCol md="7">
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
                    action: (item) => (
                      <td>
                        <CButton
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
                    ),
                  }}
                />
              )}
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md="5">
          <Cart />
        </CCol>
      </CRow>
    </div>
  );
}

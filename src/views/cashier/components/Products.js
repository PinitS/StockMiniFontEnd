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
import { ADD_ITEM_TO_CART_REQ } from "src/sagaType/cart";

const fields = [
  { key: "#" },
  { key: "name" },
  { key: "price" },
  { key: "sku" },
  { key: "img" },
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

  const findObject = (id) => data.filter((item) => item.id === id)[0];
  //find in object
  let cart = [];
  const findCart = (id) => cart.filter((item) => item.id === id)[0];

  const onClickTest = (id) => {
    const data = findObject(id);
    const product_cart = { id: data.id, name: data.name, price: data.price };
    const cartData = findCart(product_cart.id);
    if (cartData == undefined) {
      product_cart.quantity = 1;
      cart.push(product_cart);
    } else {
      for (let index = 0; index < cart.length; index++) {
        if (cart[index].id == product_cart.id) {
          cart[index].quantity += 1;
        }
      }
    }
    // action(ADD_ITEM_TO_CART_REQ , cart)
    console.log("cart", cart);
  };

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
                action: (item) => (
                  <td>
                    <CButton
                      className="mr-2"
                      color="info"
                      size="sm"
                      onClick={() => {
                        onClickTest(item.id);
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
    </div>
  );
}

import { ADD_ITEM_TO_CART } from "src/sagaType/cart";
import { put } from "redux-saga/effects";

export function* setAddDataToCart({ payload }) {
  yield put({ type: ADD_ITEM_TO_CART, payload });
}

import { put } from "redux-saga/effects";
import { ADD_TO_CART_STORE_ORDER } from "src/sagaType/storeOrder";

export function* setAddToCartStoreOrder({ payload }) {
  yield put({ type: ADD_TO_CART_STORE_ORDER , payload});
}
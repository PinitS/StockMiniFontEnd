import { apiConfig } from "src/static/apiConfig";
import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { CALL_ITEM_CART } from "src/sagaType/cart";
import { setCashierFiltersData } from "./cashier.action";

const path = "Order/";

export function* setCartData({ payload }) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(payload.input)) {
    formData.append(key, value);
  }
  const response = yield call(fetch, apiConfig.path + path + "getOrder", {
    method: "POST",
    body: formData,
  });
  const data = yield response.json();
  yield put({
    type: CALL_ITEM_CART,
    payload: { data: data.dataSet, sum: data.dataSum, order: data.order },
  });
}

export function* setAddDataToCart({ payload }) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(payload.input)) {
    formData.append(key, value);
  }
  const response = yield call(fetch, apiConfig.path + path + "create", {
    method: "POST",
    body: formData,
  });
  const data = yield response.json();
  yield toast(data == null ? "Create Fail" : data.msg);
}

export function* setDeleteDataCart({ payload }) {
  const response = yield call(fetch, apiConfig.path + path + payload.subPath, {
    method: "DELETE",
  });
  const data = yield response.json();
  yield toast(data == null ? "Delete Fail" : data.msg);
  yield setCartData({ payload: { input: { user_id: payload.user_id } } });
  yield setCashierFiltersData({ payload: { input: payload.redirect } });
}

export function* setChangeDataInCart({ payload }) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(payload.input)) {
    formData.append(key, value);
  }
  const response = yield call(fetch, apiConfig.path + path + "changeAmount", {
    method: "POST",
    body: formData,
  });
  const data = yield response.json();
  yield toast(data == null ? "Change Data Fail" : data.msg);
  yield setCartData({ payload: { input: { user_id: payload.user_id } } });
  yield setCashierFiltersData({ payload: { input: payload.redirect } });
}

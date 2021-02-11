import { apiConfig } from "src/static/apiConfig";
import { call, put } from "redux-saga/effects";
import { ORDER_CALL_BY_ID_DATA_API } from "src/sagaType/order";
import { toast } from "react-toastify";
import { setCartData } from "./cart.action";

const path = "Order/";

export function* setOrderStatusOne({ payload }) {
  const formData = new FormData();
  formData.append("user_id", payload.user_id);
  const response = yield call(
    fetch,
    apiConfig.path + path + "getOrderStatusOne",
    {
      method: "POST",
      body: formData,
    }
  );
  const data = yield response.json();
  yield put({
    type: ORDER_CALL_BY_ID_DATA_API,
    payload: { data: data.dataSet},
  });
}
export function* setOrderChangeStatusOrder({ payload }) {
  console.log("payload setOrderChangeStatusOrder", payload);
  const formData = new FormData();
  for (const [key, value] of Object.entries(payload.input)) {
    formData.append(key, value);
  }
  const response = yield call(fetch, apiConfig.path + path + "changeStatus", {
    method: "POST",
    body: formData,
  });
  const data = yield response.json();
  yield toast(data == null ? "Add Order Fail" : data.msg);
  yield setOrderStatusOne({ payload: { user_id: payload.user_id } });
  console.log('payload.user_id', payload.user_id)
  yield setCartData({payload: { input: payload.user_id } })
}

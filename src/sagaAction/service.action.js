import { apiConfig } from "src/static/apiConfig";
import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { SERVICE_GET_ORDER } from "src/sagaType/serviceOrder";


const path = "ServiceStore/";

export function* setServiceData() {
  const response = yield call(fetch, apiConfig.path + path + "getOrderStatusOne");
  const data = yield response.json();
  yield put({ type: SERVICE_GET_ORDER , payload:{data:data.dataSet}});
}

export function* setServiceChangeStatus({ payload }) {
  console.log("payload setOrderChangeStatusOrder", payload);
  const formData = new FormData();
  for (const [key, value] of Object.entries(payload.input)) {
    formData.append(key, value);
  }
  const response = yield call(fetch, apiConfig.path + "Order/" + "changeStatus", {
    method: "POST",
    body: formData,
  });
  const data = yield response.json();
  yield toast(data == null ? "Add Order Fail" : data.msg);
  yield setServiceData();

}
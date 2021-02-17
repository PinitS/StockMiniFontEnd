import { apiConfig } from "src/static/apiConfig";
import { put, call } from "redux-saga/effects";
import {
  CLEAR_STORE_ORDER,
  DEL_STORE_ORDER,
  GET_STORE_ORDER,
} from "src/sagaType/storeOrder";

const path = "StoreOrder/";
export function* setAllStoreOrderData({ payload }) {
  const formData = new FormData();
  formData.append("store_id", payload.store_id);
  const response = yield call(
    fetch,
    apiConfig.path + path + "getOrderDetails",
    {
      method: "POST",
      body: formData,
    }
  );
  const data = yield response.json();
  yield put({
    type: GET_STORE_ORDER,
    payload: { data: data.dataSet },
  });
}

export function* setDelStoreOrderData({ payload }) {
  yield put({ type: DEL_STORE_ORDER, payload });
}

export function* setClrStoreOrderData({ payload }) {
  yield put({ type: CLEAR_STORE_ORDER });
}

export function* setUpdateStoreOrderData({ payload }) {
  const formData = new FormData();
  for (var i = 0; i < payload.length; i++) {
    formData.append("id[" + i + "]", payload[i]);
  }
  const response = yield call(fetch, apiConfig.path + path + "updateStatus", {
    method: "POST",
    body: formData,
  });
  const data = yield response.json();
  yield put({ type: CLEAR_STORE_ORDER });
}

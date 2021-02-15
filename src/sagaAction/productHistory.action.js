import { apiConfig } from "src/static/apiConfig";
import { put, call } from "redux-saga/effects";
import {
  CALL_PRODUCT_HISTORY_DATA_API,
  CLEAR_PRODUCT_HISTORY_DATA_API,
} from "src/sagaType/productHistory";
import { toast } from "react-toastify";

import { setProductFiltersData } from "./productStock.action";

const path = "ProductHistory/";

export function* setProductHistory({ payload }) {
  const response = yield call(
    fetch,
    apiConfig.path + path + "getAll/" + payload.id
  );
  const data = yield response.json();
  yield put({
    type: CALL_PRODUCT_HISTORY_DATA_API,
    payload: { data: data.dataSet, id: payload.id },
  });
}

export function* resetProductHistory() {
  yield put({
    type: CLEAR_PRODUCT_HISTORY_DATA_API,
  });
}

export function* setChangeProductHistory({ payload }) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(payload.input)) {
    formData.append(key, value);
  }
  const response = yield call(fetch, apiConfig.path + path + payload.subPath, {
    method: "POST",
    body: formData,
  });
  const data = yield response.json();
  yield setProductHistory({ payload: { id: payload.id } });
  yield toast(data == null ? "Change Fail" : data.msg);
  yield setProductFiltersData({
    payload: {
      input: payload.redirectInput,
    },
  });
}

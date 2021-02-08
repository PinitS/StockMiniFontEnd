import { apiConfig } from "src/static/apiConfig";
import { put, call } from "redux-saga/effects";
import { PRODUCT_CALL_FILTER_DATA_API } from "src/sagaType/productStock";
import { toast } from "react-toastify";

const path = "Stock/";
export function* setProductFiltersData({ payload }) {
  const formData = new FormData();
  if (payload.input != null) {
    for (const [key, value] of Object.entries(payload.input)) {
      value == 0 ? (value = null) : (value = value);
      formData.append(key, value);
    }
  }
  const response = yield call(fetch, apiConfig.path + path +"getProductsFillers", {
    method: "POST",
    body: formData,
  });
  const data = yield response.json();
  yield put({
    type: PRODUCT_CALL_FILTER_DATA_API,
    payload: { data: data.dataSet, input: payload.input },
  });
}

export function* setCreateProductHistoryData({ payload }) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(payload.input)) {
    formData.append(key, value);
  }
  const response = yield call(
    fetch,
    apiConfig.path + path + "create",
    {
      method: "POST",
      body: formData,
    }
  );
  const data = yield response.json();
  yield toast(data == null ? "Create History Fail" : data.msg);
  yield setProductFiltersData({
    payload: {
      input: payload.redirectInput,
    },
  });
}

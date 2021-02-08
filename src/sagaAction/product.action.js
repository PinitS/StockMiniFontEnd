import { apiConfig } from "src/static/apiConfig";
import { put, call } from "redux-saga/effects";
import { toast } from "react-toastify";
import { PRODUCT_CALL_ALL_DATA_API } from "src/sagaType/product";

const path = "Product/";

export function* setAllProductData({ payload }) {
  const response = yield call(fetch, apiConfig.path + "Product/getAll");
  const data = yield response.json();
  yield put({ type: PRODUCT_CALL_ALL_DATA_API, payload: data.dataSet });
}

export function* setCreateProductData({ payload }) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(payload.input)) {
    formData.append(key, value);
  }
  const response = yield call(fetch, apiConfig.path + path + payload.subPath, {
    method: "POST",
    body: formData,
  });
  const data = yield response.json();
  yield toast(data == null ? "Create Fail" : data.msg);
  yield setAllProductData({ payload: path + "getAll" });
}

export function* setUpdateProductData({ payload }) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(payload.input)) {
    formData.append(key, value);
  }

  const response = yield call(fetch, apiConfig.path + path + payload.subPath, {
    method: "POST",
    body: formData,
  });
  const data = yield response.json();
  yield toast(data == null ? "Update Fail" : data.msg);
  yield setAllProductData({ payload: path + "getAll" });
}

export function* setDeleteProductData({ payload }) {
  const response = yield call(fetch, apiConfig.path + path + payload.subPath, {
    method: "DELETE",
  });
  const data = yield response.json();
  yield toast(data == null ? "Delete Fail" : data.msg);
  yield setAllProductData({ payload: path + "getAll" });
}

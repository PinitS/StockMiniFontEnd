import { apiConfig } from "src/static/apiConfig";
import { put, call } from "redux-saga/effects";
import { toast } from "react-toastify";
import { CATEGORY_CALL_ALL_DATA_API } from "src/sagaType/category";

const path = "Category/";

export function* setAllCategoryData({ payload }) {
  const response = yield call(fetch, apiConfig.path + "Category/getAll");
  const data = yield response.json();
  yield put({ type: CATEGORY_CALL_ALL_DATA_API, payload: data.dataSet });
}

export function* setCreateCategoryData({ payload }) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(payload.input)) {
    formData.append(key, value);
  }
  const response = yield call(
    fetch,
    apiConfig.path + path + payload.subPath,
    {
      method: "POST",
      body: formData,
    }
  );
  const data = yield response.json();
  yield toast(data == null ? "Create Fail" : data.msg);
  yield setAllCategoryData({ payload: path + "getAll" });
}

export function* setUpdateCategoryData({ payload }) {
  console.log("payload", payload);
  const formData = new FormData();
  for (const [key, value] of Object.entries(payload.input)) {
    formData.append(key, value);
  }

  const response = yield call(
    fetch,
    apiConfig.path + path + payload.subPath,
    {
      method: "POST",
      body: formData,
    }
  );
  const data = yield response.json();
  yield toast(data == null ? "Update Fail" : data.msg);
  yield setAllCategoryData({ payload: path + "getAll" });
}

export function* setDeleteCategoryData({ payload }) {
  const response = yield call(
    fetch,
    apiConfig.path + path + payload.subPath,
    {
      method: "DELETE",
    }
  );
  const data = yield response.json();
  yield toast(data == null ? "Delete Fail" : data.msg);
  yield setAllCategoryData({ payload: path + "getAll" });
}

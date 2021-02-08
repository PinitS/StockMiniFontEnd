import { apiConfig } from "src/static/apiConfig";
import { put, call } from "redux-saga/effects";
import { toast } from "react-toastify";
import { MAIN_CATEGORY_CALL_ALL_DATA_API } from "src/sagaType/mainCategory";

const path = "MainCategory/";
export function* setAllMainCategoryData({ payload }) {
  const response = yield call(fetch, apiConfig.path + "MainCategory/getAll");
  const data = yield response.json();
  yield put({ type: MAIN_CATEGORY_CALL_ALL_DATA_API, payload: data.dataSet });
}

export function* setCreateMainCategoryData({ payload }) {
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
  yield setAllMainCategoryData({ payload: payload.path + "getAll" });
}

export function* setUpdateMainCategoryData({ payload }) {
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
  yield setAllMainCategoryData({ payload: path + "getAll" });
}

export function* setDeleteMainCategoryData({ payload }) {
  const response = yield call(
    fetch,
    apiConfig.path + path + payload.subPath,
    {
      method: "DELETE",
    }
  );
  const data = yield response.json();
  yield toast(data == null ? "Delete Fail" : data.msg);
  yield setAllMainCategoryData({ payload: path + "getAll" });
}

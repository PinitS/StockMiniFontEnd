import { STORE_CALL_ALL_DATA_API } from "src/sagaType/storeManage";
import { apiConfig } from "src/static/apiConfig";
import { put, call } from "redux-saga/effects";
import { toast } from "react-toastify";

const path = "Store/";

export function* setAllStoreData({ payload }) {
  const response = yield call(fetch, apiConfig.path + "Store/getAll");
  const data = yield response.json();
  yield put({ type: STORE_CALL_ALL_DATA_API, payload: data.dataSet });
}

export function* setCreateStoreData({ payload }) {
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
  yield setAllStoreData({ payload: path + "getAll" });
}

export function* setUpdateStoreData({ payload }) {
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
  yield setAllStoreData({ payload: path + "getAll" });
}

export function* setDeleteStoreData({ payload }) {
  const response = yield call(
    fetch,
    apiConfig.path + path + payload.subPath,
    {
      method: "DELETE",
    }
  );
  const data = yield response.json();
  yield toast(data == null ? "Delete Fail" : data.msg);
  yield setAllStoreData({ payload: path + "getAll" });
}

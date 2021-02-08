import { apiConfig } from "src/static/apiConfig";
import { put, call } from "redux-saga/effects";
import { toast } from "react-toastify";
import { TYPE_CALL_ALL_DATA_API } from "src/sagaType/typeManager";

const path = "Type/";

export function* setAllTypeData({ payload }) {
  const response = yield call(fetch, apiConfig.path + "Type/getAll");
  const data = yield response.json();
  yield put({ type: TYPE_CALL_ALL_DATA_API, payload: data.dataSet });
}

export function* setCreateTypeData({ payload }) {
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
  yield setAllTypeData({ payload: path + "getAll" });
}

export function* setUpdateTypeData({ payload }) {
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
  yield setAllTypeData({ payload: path + "getAll" });
}

export function* setDeleteTypeData({ payload }) {
  const response = yield call(
    fetch,
    apiConfig.path + path + payload.subPath,
    {
      method: "DELETE",
    }
  );
  const data = yield response.json();
  yield toast(data == null ? "Delete Fail" : data.msg);
  yield setAllTypeData({ payload: path + "getAll" });
}

import { put, call } from "redux-saga/effects";
import { apiConfig, headers } from "src/static/apiConfig";
import { toast } from "react-toastify";

import {
  CHECK_STORE,
  SET_RESPONSIVE,
  IS_OPEN_MODAL,
  CALL_ALL_DATA_API,
  CREATE_DATA_API,
} from "../actionType";

export function* setCheckStore() {
  yield put({ type: CHECK_STORE });
}

export function* setResponsive({ payload }) {
  yield put({ type: SET_RESPONSIVE, payload });
}

export function* setModal({ payload }) {
  yield put({ type: IS_OPEN_MODAL, payload });
}

//api
export function* setAllDataApi({ payload }) {
  const response = yield call(fetch, apiConfig.path + payload);
  const data = yield response.json();
  yield put({ type: CALL_ALL_DATA_API, payload: data.dataSet });
}


export function* setCreateDataApi({ payload }) {
  let responseData = null;
  yield fetch(apiConfig.path + payload.path + payload.subPath, {
    method: "POST",
    body: JSON.stringify(payload.input),
    headers,
  })
    .then((res) => res.json())
    .then((data) => (responseData = data))
    .catch((error) => console.log("error", error));
  yield put({ type: CREATE_DATA_API });
  yield toast(responseData == null ? "Create Fail" : responseData.msg);
  yield setAllDataApi({ payload: payload.path + "getAll" });
}


export function* setUpdateDataApi({ payload }) {
  let responseData = null;
  yield fetch(apiConfig.path + payload.path + payload.subPath, {
    method: "POST",
    body: JSON.stringify(payload.input),
    headers,
  })
    .then((res) => res.json())
    .then((data) => (responseData = data))
    .catch((error) => console.log("error", error));
  yield put({ type: CREATE_DATA_API });
  yield toast(responseData == null ? "Update Fail" : responseData.msg);
  yield setAllDataApi({ payload: payload.path + "getAll" });
}
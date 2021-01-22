import { takeEvery, all } from "redux-saga/effects";
import {
  CHECK_STORE_REQ,
  SET_RESPONSIVE_REQ,
  IS_OPEN_MODAL_REQ,
  CALL_ALL_DATA_API_REQ,
  CREATE_DATA_API_REQ,
  UPDATE_DATA_API_REQ,
  DELETE_DATA_API_REQ,
  GET_DROPDOWN_DATA_API_REQ,
} from "../actionType";

import {
  setCheckStore,
  setResponsive,
  setModal,
  setAllDataApi,
  setCreateDataApi,
  setUpdateDataApi,
  setDeleteDataApi,
  setDropDownDataApi,
} from "../actionSaga/saga.action";

export function* watchSetCheckStore() {
  yield takeEvery(CHECK_STORE_REQ, setCheckStore);
}

export function* watchSetResponsive() {
  yield takeEvery(SET_RESPONSIVE_REQ, setResponsive);
}

export function* watchSetModal() {
  yield takeEvery(IS_OPEN_MODAL_REQ, setModal);
}
//api
export function* watchSetDataAllApi() {
  yield takeEvery(CALL_ALL_DATA_API_REQ, setAllDataApi);
}

export function* watchSetCreateDataApi() {
  yield takeEvery(CREATE_DATA_API_REQ, setCreateDataApi);
}

export function* watchSetUpdateDataApi() {
  yield takeEvery(UPDATE_DATA_API_REQ, setUpdateDataApi);
}

export function* watchSetDeleteDataApi() {
  yield takeEvery(DELETE_DATA_API_REQ, setDeleteDataApi);
}

export function* watchSetDropDownDataApi() {
  yield takeEvery(GET_DROPDOWN_DATA_API_REQ, setDropDownDataApi);
}

export default function* rootSaga() {
  yield all([
    watchSetCheckStore(),
    watchSetResponsive(),
    watchSetModal(),
    watchSetDataAllApi(),
    watchSetCreateDataApi(),
    watchSetUpdateDataApi(),
    watchSetDeleteDataApi(),
    watchSetDropDownDataApi(),
  ]);
}

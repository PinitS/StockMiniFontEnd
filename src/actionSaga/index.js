import { takeEvery, all } from "redux-saga/effects";
import {
  CHECK_STORE_REQ,
  SET_RESPONSIVE_REQ,
  IS_OPEN_MODAL_REQ,
  CALL_ALL_DATA_API_REQ,
  CREATE_DATA_API_REQ,
  UPDATE_DATA_API_REQ,
} from "../actionType";

import {
  setCheckStore,
  setResponsive,
  setModal,
  setAllDataApi,
  setCreateDataApi,
  setUpdateDataApi,
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

export default function* rootSaga() {
  yield all([
    watchSetCheckStore(),
    watchSetResponsive(),
    watchSetModal(),
    watchSetDataAllApi(),
    watchSetCreateDataApi(),
    watchSetUpdateDataApi(),
  ]);
}

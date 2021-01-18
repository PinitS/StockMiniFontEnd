import { takeEvery, all } from "redux-saga/effects";
import {
  CHECK_STORE_REQ,
  SET_RESPONSIVE_REQ,
  IS_OPEN_MODAL_REQ,
} from "../actionType";

import {
  setCheckStore,
  setResponsive,
  setModal,
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

export default function* rootSaga() {
  yield all([watchSetCheckStore(), watchSetResponsive(), watchSetModal()]);
}

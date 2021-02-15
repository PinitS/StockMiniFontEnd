import { put } from "redux-saga/effects";
import { SELECT_STORE } from "src/sagaType/selectStore";

export function* setSelectStore({ payload }) {
  yield put({ type: SELECT_STORE, payload });
}
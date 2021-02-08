import { put } from "redux-saga/effects";
import { IS_OPEN_MODAL } from "src/sagaType/modal";

export function* setModal({ payload }) {
    yield put({ type: IS_OPEN_MODAL, payload });
  }
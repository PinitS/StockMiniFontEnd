import { put } from "redux-saga/effects";
import { CHECK_STORE , SET_RESPONSIVE , IS_OPEN_MODAL} from "../actionType";
export function* setCheckStore() {
  yield put({ type: CHECK_STORE });
}

export function* setResponsive({payload}) {
  yield put({ type: SET_RESPONSIVE , payload});
}

export function* setModal({ payload }) {
  yield put({ type: IS_OPEN_MODAL, payload });
}
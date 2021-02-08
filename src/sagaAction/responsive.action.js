import { put } from "redux-saga/effects";
import { SET_RESPONSIVE } from "src/sagaType/responsive";

export function* setResponsive({ payload }) {
    yield put({ type: SET_RESPONSIVE, payload });
  }
  
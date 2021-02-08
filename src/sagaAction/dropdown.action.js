
import { apiConfig } from "src/static/apiConfig";
import { put, call } from "redux-saga/effects";
import { GET_DROPDOWN_DATA_API } from "src/sagaType/allDropdown";
export function* setDropdownData({ payload }) {
  const response = yield call(fetch, apiConfig.path + "Other/getAllDropDown");
  const data = yield response.json();
  yield put({ type: GET_DROPDOWN_DATA_API, payload: data.dataSet });
}
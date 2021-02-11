import { apiConfig } from "src/static/apiConfig";
import { put, call } from "redux-saga/effects";
import { toast } from "react-toastify";
import { CASHIER_CALL_FILTER_DATA_API } from "src/sagaType/cashier";

const path = "Cashier/";
export function* setCashierFiltersData({ payload }) {
  const formData = new FormData();
  if (payload.input != null) {
    for (const [key, value] of Object.entries(payload.input)) {
      value == 0 ? (value = "null") : (value = value);
      formData.append(key, value);
    }
  }
  const response = yield call(
    fetch,
    apiConfig.path + path + "getProductsFillers",
    {
      method: "POST",
      body: formData,
    }
  );
  const data = yield response.json();
  yield put({
    type: CASHIER_CALL_FILTER_DATA_API,
    payload: { data: data.dataSet, input: payload.input },
  });
}

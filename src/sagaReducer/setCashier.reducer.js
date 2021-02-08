import { CASHIER_CALL_FILTER_DATA_API } from "src/sagaType/cashier";

const initialState = {
  data: null,
  input:null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CASHIER_CALL_FILTER_DATA_API:
      return { ...state, data: payload.data };
    default:
      return state;
  }
};

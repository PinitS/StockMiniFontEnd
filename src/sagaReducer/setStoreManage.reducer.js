import { STORE_CALL_ALL_DATA_API } from "../sagaType/storeManage";
const initialState = {
  data: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case STORE_CALL_ALL_DATA_API:
      return { ...state, data: payload };
    default:
      return state;
  }
};

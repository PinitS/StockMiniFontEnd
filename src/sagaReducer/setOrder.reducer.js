import { ORDER_CALL_BY_ID_DATA_API } from "src/sagaType/order";
const initialState = {
  data: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ORDER_CALL_BY_ID_DATA_API:
      return {
        ...state,
        data: payload.data,
      };
    default:
      return state;
  }
};

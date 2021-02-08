import { CALL_PRODUCT_HISTORY_DATA_API, CLEAR_PRODUCT_HISTORY_DATA_API } from "src/sagaType/productHistory";

const initialState = {
  data: null,
  id:null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CALL_PRODUCT_HISTORY_DATA_API:
      return { ...state, data: payload.data , id : payload.id};
    case CLEAR_PRODUCT_HISTORY_DATA_API:
        return { ...state, data: null , id : null};
    default:
      return state;
  }
};
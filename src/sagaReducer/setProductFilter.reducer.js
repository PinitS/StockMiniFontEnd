import { PRODUCT_CALL_FILTER_DATA_API } from "src/sagaType/productStock";

const initialState = {
  data: null,
  input:null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_CALL_FILTER_DATA_API:
      return { ...state, data: payload.data , input:payload.input };
    default:
      return state;
  }
};

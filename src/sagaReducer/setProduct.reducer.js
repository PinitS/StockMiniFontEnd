import { PRODUCT_CALL_ALL_DATA_API } from "src/sagaType/product";

const initialState = {
  data: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_CALL_ALL_DATA_API:
      return { ...state, data: payload };
    default:
      return state;
  }
};

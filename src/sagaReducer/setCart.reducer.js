import { CALL_ITEM_CART } from "src/sagaType/cart";
const initialState = {
  data: [],
  sum: null,
  order: null,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CALL_ITEM_CART:
      return {
        ...state,
        data: payload.data,
        sum: payload.sum,
        order: payload.order,
      };
    default:
      return state;
  }
};

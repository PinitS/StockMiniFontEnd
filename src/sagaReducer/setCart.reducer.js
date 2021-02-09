import { ADD_ITEM_TO_CART } from "src/sagaType/cart";
const initialState = {
  data: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM_TO_CART:
      return { ...state, data: payload };
    default:
      return state;
  }
};

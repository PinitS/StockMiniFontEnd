import { ADD_TO_CART_STORE_ORDER, CLEAR_STORE_ORDER } from "src/sagaType/storeOrder";

const initialState = {
  data: [],
  id:[]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART_STORE_ORDER:
      return { ...state, data: [...state.data, payload] , id: [...state.id, payload.id] };
    case CLEAR_STORE_ORDER:
      return { ...state, data: [] , id:[] };
    default:
      return state;
  }
};

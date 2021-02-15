import { DEL_STORE_ORDER, GET_STORE_ORDER } from "src/sagaType/storeOrder";

const initialState = {
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_STORE_ORDER:
      return { ...state, data: payload.data };
    case DEL_STORE_ORDER:
      return { data: state.data.filter((item) => item.id !== payload) };
    default:
      return state;
  }
};

import { SELECT_STORE } from "src/sagaType/selectStore";
const initialState = {
  store: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_STORE:
      return { ...state, store: payload };
    default:
      return state;
  }
};
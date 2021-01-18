import { CHECK_STORE } from "../actionType";

const initialState = {
  checkStore: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHECK_STORE:
      return { ...state, checkStore: state.checkStore + 1 };
    default:
      return state;
  }
};

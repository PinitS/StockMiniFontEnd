import { SET_RESPONSIVE } from "../sagaType/responsive";

const initialState = {
  sidebarShow: "responsive",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_RESPONSIVE:
      return { ...state, sidebarShow: payload };
    default:
      return state;
  }
};

import { IS_OPEN_MODAL } from "src/sagaType/modal";

const initialState = {
  isModal: false,
  component: null,
  modalHeader: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_OPEN_MODAL:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

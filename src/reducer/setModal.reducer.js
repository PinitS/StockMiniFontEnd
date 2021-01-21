import { IS_OPEN_MODAL } from "../actionType";

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
        // isModal: payload.isModal,
        // component: payload.component,
        // modalHeader: payload.modalHeader,
        ...payload
      };
    default:
      return state;
  }
};

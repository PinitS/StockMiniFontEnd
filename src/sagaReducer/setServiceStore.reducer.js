import { SERVICE_GET_ORDER } from "src/sagaType/serviceOrder";

const initialState = {
  data: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SERVICE_GET_ORDER:
      return { ...state, data:payload.data };
    default:
      return state;
  }
};

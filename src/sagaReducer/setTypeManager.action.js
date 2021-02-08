import { TYPE_CALL_ALL_DATA_API } from "src/sagaType/typeManager";

const initialState = {
  data: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPE_CALL_ALL_DATA_API:
      return { ...state, data: payload };
    default:
      return state;
  }
};

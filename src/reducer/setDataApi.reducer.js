import {
  CALL_ALL_DATA_API,
  CREATE_DATA_API,
  UPDATE_DATA_API,
} from "src/actionType";

const initialState = {
  data: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CALL_ALL_DATA_API:
      return { ...state, data: payload };
    case CREATE_DATA_API:
      return { ...state };
    case UPDATE_DATA_API:
        return { ...state };
    default:
      return state;
  }
};

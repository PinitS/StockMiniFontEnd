import { GET_DROPDOWN_DATA_API } from "src/actionType";

const initialState = {
  dropdown: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DROPDOWN_DATA_API:
      return { ...state, dropdown: payload };
    default:
      return state;
  }
};

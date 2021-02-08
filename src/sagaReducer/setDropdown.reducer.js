import { GET_DROPDOWN_DATA_API } from "src/sagaType/allDropdown";
const initialState = {
  data: null,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DROPDOWN_DATA_API:
      return { ...state, data: payload };
    default:
      return state;
  }
};

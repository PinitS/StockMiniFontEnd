import { MAIN_CATEGORY_CALL_ALL_DATA_API } from "src/sagaType/mainCategory";
const initialState = {
  data: null,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case MAIN_CATEGORY_CALL_ALL_DATA_API:
      return { ...state, data: payload };
    default:
      return state;
  }
};

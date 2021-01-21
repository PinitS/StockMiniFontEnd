import { combineReducers } from "redux";
import storeCheck from "../reducer/store.reducer";
import setResponsive from "../reducer/setResponsive.reducer";
import setModal from "../reducer/setModal.reducer";
import setDataApi from "../reducer/setDataApi.reducer";

export default combineReducers({
  storeCheck,
  setResponsive,
  setModal,
  setDataApi,
});

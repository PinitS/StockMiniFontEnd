import { combineReducers } from "redux";
import storeCheck from "../reducer/store.reducer";
import setResponsive from "../reducer/setResponsive.reducer";
import setModal from "../reducer/setModal.reducer";


export default combineReducers({ storeCheck,setResponsive,setModal });
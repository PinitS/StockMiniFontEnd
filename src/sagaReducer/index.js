import { combineReducers } from "redux";
import setResponsive from "./setResponsive.reducer";
import setModal from "./setModal.reducer";
import setStoreManage from "./setStoreManage.reducer";
import setMainCategory from "./setMainCategory.reducer";
import setCategory from "./setCategory.reducer";
import setDropdown from "./setDropdown.reducer";
import setTypeManage from "./setTypeManager.action";
import setProduct from "./setProduct.reducer";
import setProductFilter from "./setProductFilter.reducer";
import setProductHistory from "./setProductHistory.reducer";
import setCashier from "./setCashier.reducer";
import setCart from "./setCart.reducer";
import setOrder from "./setOrder.reducer";

export default combineReducers({
  setResponsive,
  setModal,
  setStoreManage,
  setMainCategory,
  setCategory,
  setDropdown,
  setTypeManage,
  setProduct,
  setProductFilter,
  setProductHistory,
  setCashier,
  setCart,
  setOrder
});

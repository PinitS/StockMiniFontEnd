import { takeEvery, all } from "redux-saga/effects";

import { IS_OPEN_MODAL_REQ } from "src/sagaType/modal";
import { SET_RESPONSIVE_REQ } from "src/sagaType/responsive";
import { setResponsive } from "./responsive.action";
import { setModal } from "./modal.action";
import {
  STORE_CALL_ALL_DATA_API_REQ,
  STORE_CREATE_DATA_API_REQ,
  STORE_DELETE_DATA_API_REQ,
  STORE_UPDATE_DATA_API_REQ,
} from "src/sagaType/storeManage";
import {
  setAllStoreData,
  setCreateStoreData,
  setUpdateStoreData,
  setDeleteStoreData,
} from "./storeManage.action";
import {
  MAIN_CATEGORY_CALL_ALL_DATA_API_REQ,
  MAIN_CATEGORY_CREATE_DATA_API_REQ,
  MAIN_CATEGORY_DELETE_DATA_API_REQ,
  MAIN_CATEGORY_UPDATE_DATA_API_REQ,
} from "src/sagaType/mainCategory";
import {
  setAllMainCategoryData,
  setCreateMainCategoryData,
  setDeleteMainCategoryData,
  setUpdateMainCategoryData,
} from "./mainCategory.action";
import {
  CATEGORY_CALL_ALL_DATA_API_REQ,
  CATEGORY_CREATE_DATA_API_REQ,
  CATEGORY_DELETE_DATA_API_REQ,
  CATEGORY_UPDATE_DATA_API_REQ,
} from "src/sagaType/category";
import {
  setAllCategoryData,
  setCreateCategoryData,
  setDeleteCategoryData,
  setUpdateCategoryData,
} from "./category.action";
import { GET_DROPDOWN_DATA_API_REQ } from "src/sagaType/allDropdown";
import { setDropdownData } from "./dropdown.action";
import {
  TYPE_CALL_ALL_DATA_API_REQ,
  TYPE_CREATE_DATA_API_REQ,
  TYPE_DELETE_DATA_API_REQ,
  TYPE_UPDATE_DATA_API_REQ,
} from "src/sagaType/typeManager";
import {
  setAllTypeData,
  setCreateTypeData,
  setDeleteTypeData,
  setUpdateTypeData,
} from "./typeManager.action";
import {
  PRODUCT_CALL_ALL_DATA_API_REQ,
  PRODUCT_CREATE_DATA_API_REQ,
  PRODUCT_DELETE_DATA_API_REQ,
  PRODUCT_UPDATE_DATA_API_REQ,
} from "src/sagaType/product";
import {
  setAllProductData,
  setCreateProductData,
  setDeleteProductData,
  setUpdateProductData,
} from "./product.action";
import {
  PRODUCT_CALL_FILTER_DATA_API_REQ,
  PRODUCT_CREATE_HISTORY_DATA_API_REQ,
} from "src/sagaType/productStock";
import {
  setProductFiltersData,
  setCreateProductHistoryData,
} from "./productStock.action";
import {
  CALL_PRODUCT_HISTORY_DATA_API_REQ,
  CHANGE_PRODUCT_HISTORY_DATA_API_REQ,
  CLEAR_PRODUCT_HISTORY_DATA_API_REQ,
} from "src/sagaType/productHistory";
import {
  resetProductHistory,
  setChangeProductHistory,
  setProductHistory,
} from "./productHistory.action";
import { CASHIER_CALL_FILTER_DATA_API_REQ } from "src/sagaType/cashier";
import { setCashierFiltersData } from "./cashier.action";
import {
  setAddDataToCart,
  setCartData,
  setChangeDataInCart,
  setDeleteDataCart,
} from "./cart.action";
import {
  ADD_ITEM_TO_CART_REQ,
  CALL_ITEM_CART_REQ,
  CHANGE_ITEM_IN_CART_REQ,
  DELETE_ITEM_IN_CART_REQ,
} from "src/sagaType/cart";
import { CHANGE_STATUS_ORDER_REQ, ORDER_CALL_BY_ID_DATA_API_REQ } from "src/sagaType/order";
import { setOrderChangeStatusOrder, setOrderStatusOne } from "./order.action";
import { SELECT_STORE_REQ } from "src/sagaType/selectStore";
import { setSelectStore } from "./selectStore.action";
import { ADD_TO_CART_STORE_ORDER_REQ, CLEAR_STORE_ORDER_REQ, DEL_STORE_ORDER_REQ, GET_STORE_ORDER_REQ, UPDATE_STATUS_STORE_ORDER_REQ } from "src/sagaType/storeOrder";
import { setAllStoreOrderData, setClrStoreOrderData, setDelStoreOrderData, setUpdateStoreOrderData } from "./storeOrder.action";
import { setAddToCartStoreOrder } from "./storeOrderCart.action";
import { SERVICE_CHANGE_STATUS_ORDER_REQ, SERVICE_GET_ORDER_REQ } from "src/sagaType/serviceOrder";
import { setServiceChangeStatus, setServiceData } from "./service.action";


export function* watchSetResponsive() {
  yield takeEvery(SET_RESPONSIVE_REQ, setResponsive);
}
export function* watchSetModal() {
  yield takeEvery(IS_OPEN_MODAL_REQ, setModal);
}
//store
export function* watchSetAllStoreData() {
  yield takeEvery(STORE_CALL_ALL_DATA_API_REQ, setAllStoreData);
}
export function* watchSetCreateStoreData() {
  yield takeEvery(STORE_CREATE_DATA_API_REQ, setCreateStoreData);
}
export function* watchSetUpdateStoreData() {
  yield takeEvery(STORE_UPDATE_DATA_API_REQ, setUpdateStoreData);
}
export function* watchSetDeleteStoreData() {
  yield takeEvery(STORE_DELETE_DATA_API_REQ, setDeleteStoreData);
}
//end store

//MainCategory
export function* watchSetAllMainCategoryData() {
  yield takeEvery(MAIN_CATEGORY_CALL_ALL_DATA_API_REQ, setAllMainCategoryData);
}
export function* watchSetCreateMainCategoryData() {
  yield takeEvery(MAIN_CATEGORY_CREATE_DATA_API_REQ, setCreateMainCategoryData);
}
export function* watchSetUpdateMainCategoryData() {
  yield takeEvery(MAIN_CATEGORY_UPDATE_DATA_API_REQ, setUpdateMainCategoryData);
}
export function* watchSetDeleteMainCategoryData() {
  yield takeEvery(MAIN_CATEGORY_DELETE_DATA_API_REQ, setDeleteMainCategoryData);
}
//end MainCategory

//Category
export function* watchSetAllCategoryData() {
  yield takeEvery(CATEGORY_CALL_ALL_DATA_API_REQ, setAllCategoryData);
}
export function* watchSetCreateCategoryData() {
  yield takeEvery(CATEGORY_CREATE_DATA_API_REQ, setCreateCategoryData);
}
export function* watchSetUpdateCategoryData() {
  yield takeEvery(CATEGORY_UPDATE_DATA_API_REQ, setUpdateCategoryData);
}
export function* watchSetDeleteCategoryData() {
  yield takeEvery(CATEGORY_DELETE_DATA_API_REQ, setDeleteCategoryData);
}
//end Category
export function* watchSetDropdownData() {
  yield takeEvery(GET_DROPDOWN_DATA_API_REQ, setDropdownData);
}
//Type
export function* watchSetAllTypeData() {
  yield takeEvery(TYPE_CALL_ALL_DATA_API_REQ, setAllTypeData);
}
export function* watchSetCreateTypeData() {
  yield takeEvery(TYPE_CREATE_DATA_API_REQ, setCreateTypeData);
}
export function* watchSetUpdateTypeData() {
  yield takeEvery(TYPE_UPDATE_DATA_API_REQ, setUpdateTypeData);
}
export function* watchSetDeleteTypeData() {
  yield takeEvery(TYPE_DELETE_DATA_API_REQ, setDeleteTypeData);
}
//end Type
//Product
export function* watchSetAllProductData() {
  yield takeEvery(PRODUCT_CALL_ALL_DATA_API_REQ, setAllProductData);
}
export function* watchSetCreateProductData() {
  yield takeEvery(PRODUCT_CREATE_DATA_API_REQ, setCreateProductData);
}
export function* watchSetUpdateProductData() {
  yield takeEvery(PRODUCT_UPDATE_DATA_API_REQ, setUpdateProductData);
}
export function* watchSetDeleteProductData() {
  yield takeEvery(PRODUCT_DELETE_DATA_API_REQ, setDeleteProductData);
}
//end Product
//Product Stock
export function* watchSetProductFiltersData() {
  yield takeEvery(PRODUCT_CALL_FILTER_DATA_API_REQ, setProductFiltersData);
}
export function* watchSetCreateProductHistoryData() {
  yield takeEvery(
    PRODUCT_CREATE_HISTORY_DATA_API_REQ,
    setCreateProductHistoryData
  );
}
//end Product Stock
export function* watchSetProductHistory() {
  yield takeEvery(CALL_PRODUCT_HISTORY_DATA_API_REQ, setProductHistory);
}
export function* watchResetProductHistory() {
  yield takeEvery(CLEAR_PRODUCT_HISTORY_DATA_API_REQ, resetProductHistory);
}

export function* watchSetChangeProductHistory() {
  yield takeEvery(CHANGE_PRODUCT_HISTORY_DATA_API_REQ, setChangeProductHistory);
}

export function* watchSetCashierFilersData() {
  yield takeEvery(CASHIER_CALL_FILTER_DATA_API_REQ, setCashierFiltersData);
}

export function* watchSetAddDataToCart() {
  yield takeEvery(ADD_ITEM_TO_CART_REQ, setAddDataToCart);
}

export function* watchSetCartData() {
  yield takeEvery(CALL_ITEM_CART_REQ, setCartData);
}

export function* watchSetDelCartData() {
  yield takeEvery(DELETE_ITEM_IN_CART_REQ, setDeleteDataCart);
}

export function* watchSetChangeCartData() {
  yield takeEvery(CHANGE_ITEM_IN_CART_REQ, setChangeDataInCart);
}

export function* watchSetOrderStatusOne() {
  yield takeEvery(ORDER_CALL_BY_ID_DATA_API_REQ, setOrderStatusOne);
}

export function* watchSetOrderChangeStatusOrder() {
  yield takeEvery(CHANGE_STATUS_ORDER_REQ, setOrderChangeStatusOrder);
}

export function* watchSetSelectStore() {
  yield takeEvery(SELECT_STORE_REQ, setSelectStore);
}

export function* watchSetAllStoreOrderData() {
  yield takeEvery(GET_STORE_ORDER_REQ, setAllStoreOrderData);
}

export function* watchSetAddToCartStoreOrder() {
  yield takeEvery(ADD_TO_CART_STORE_ORDER_REQ, setAddToCartStoreOrder);
}

export function* watchSetDelStoreOrderData() {
  yield takeEvery(DEL_STORE_ORDER_REQ, setDelStoreOrderData);
}

export function* watchSetClrStoreOrderData() {
  yield takeEvery(CLEAR_STORE_ORDER_REQ, setClrStoreOrderData);
}

export function* watchSetUpdateStoreOrderData() {
  yield takeEvery(UPDATE_STATUS_STORE_ORDER_REQ, setUpdateStoreOrderData);
}


export function* watchSetServiceData() {
  yield takeEvery(SERVICE_GET_ORDER_REQ , setServiceData);
}

export function* watchSetServiceChangeStatus() {
  yield takeEvery(SERVICE_CHANGE_STATUS_ORDER_REQ , setServiceChangeStatus);
}





export default function* rootSaga() {
  yield all([
    watchSetResponsive(),
    watchSetModal(),
    //Store
    watchSetAllStoreData(),
    watchSetCreateStoreData(),
    watchSetUpdateStoreData(),
    watchSetDeleteStoreData(),
    //endStore
    //MainCategory
    watchSetAllMainCategoryData(),
    watchSetCreateMainCategoryData(),
    watchSetUpdateMainCategoryData(),
    watchSetDeleteMainCategoryData(),
    //endMainCategory
    //MainCategory
    watchSetAllCategoryData(),
    watchSetCreateCategoryData(),
    watchSetUpdateCategoryData(),
    watchSetDeleteCategoryData(),
    //endMainCategory
    watchSetDropdownData(),
    //Type
    watchSetAllTypeData(),
    watchSetCreateTypeData(),
    watchSetUpdateTypeData(),
    watchSetDeleteTypeData(),
    //endType
    //Product
    watchSetAllProductData(),
    watchSetCreateProductData(),
    watchSetUpdateProductData(),
    watchSetDeleteProductData(),
    //endProduct
    //Stock Product
    watchSetProductFiltersData(),
    watchSetCreateProductHistoryData(),
    //end Stock Product
    watchSetProductHistory(),
    watchResetProductHistory(),
    watchSetChangeProductHistory(),
    //cashier
    watchSetCashierFilersData(),
    //add to cart
    watchSetAddDataToCart(),
    watchSetCartData(),
    watchSetDelCartData(),
    watchSetChangeCartData(),
    //order
    watchSetOrderStatusOne(),
    watchSetOrderChangeStatusOrder(),
    //selectStore
    watchSetSelectStore(),
    watchSetAllStoreOrderData(),
    watchSetAddToCartStoreOrder(),
    watchSetDelStoreOrderData(),
    watchSetClrStoreOrderData(),

    watchSetUpdateStoreOrderData(),
    watchSetServiceData(),
    watchSetServiceChangeStatus(),
  ]);
}

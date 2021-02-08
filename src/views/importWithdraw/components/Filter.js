import React from "react";

import {
  CFormGroup,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CLabel,
  CSelect,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { GET_DROPDOWN_DATA_API_REQ } from "src/sagaType/allDropdown";
import { PRODUCT_CALL_FILTER_DATA_API_REQ } from "src/sagaType/productStock";

export default function Filter() {
  const dispatch = useDispatch();

  const action = (type, payload) => dispatch({ type, payload });
  //--end redux && redux-saga
  const { register, handleSubmit, errors } = useForm({});
  const dataDropdown = useSelector(({ setDropdown }) => setDropdown.data);

  const onFilters = (inputData, e) => {
    console.log("inputData", inputData);
    action(PRODUCT_CALL_FILTER_DATA_API_REQ, {
      subPath: "getProductsFillers",
      input: inputData,
    });
  };

  React.useEffect(() => {
    action(GET_DROPDOWN_DATA_API_REQ);
  }, []);

  return (
    <div>
      {dataDropdown && (
        <CCard>
          <CCardBody>
            <CRow className="text-center">
              <CCol sm="3">
                <CFormGroup>
                  <CLabel htmlFor="postal-code">Store</CLabel>
                  <CSelect
                    custom
                    name="store_id"
                    id="store_id"
                    innerRef={register}
                    onChange={handleSubmit(onFilters)}
                  >
                    <option value="0">All Store</option>
                    {Object.entries(dataDropdown.DDStore).map(([key, value]) => {
                      return (
                        <option key={key} value={key}>
                          {value}
                        </option>
                      );
                    })}
                  </CSelect>
                </CFormGroup>
              </CCol>

              <CCol sm="3">
                <CFormGroup>
                  <CLabel htmlFor="postal-code">Main Category</CLabel>
                  <CSelect
                    custom
                    name="mainCategory_id"
                    id="mainCategory_id"
                    innerRef={register}
                    onChange={handleSubmit(onFilters)}
                  >
                    <option value="0">All Main Category</option>
                    {Object.entries(dataDropdown.DDMainCategory).map(
                      ([key, value]) => {
                        return (
                          <option key={key} value={key}>
                            {value}
                          </option>
                        );
                      }
                    )}
                  </CSelect>
                </CFormGroup>
              </CCol>

              <CCol sm="3">
                <CFormGroup>
                  <CLabel htmlFor="postal-code">Category</CLabel>
                  <CSelect
                    custom
                    name="category_id"
                    id="category_id"
                    innerRef={register}
                    onChange={handleSubmit(onFilters)}
                  >
                    <option value="0">All Category</option>
                    {Object.entries(dataDropdown.DDCategory).map(
                      ([key, value]) => {
                        return (
                          <option key={key} value={key}>
                            {value}
                          </option>
                        );
                      }
                    )}
                  </CSelect>
                </CFormGroup>
              </CCol>

              <CCol sm="3">
                <CFormGroup>
                  <CLabel htmlFor="postal-code">Type</CLabel>
                  <CSelect
                    custom
                    name="type_id"
                    id="type_id"
                    innerRef={register}
                    onChange={handleSubmit(onFilters)}
                  >
                    <option value="0">All Type</option>
                    {Object.entries(dataDropdown.DDType).map(([key, value]) => {
                      return (
                        <option key={key} value={key}>
                          {value}
                        </option>
                      );
                    })}
                  </CSelect>
                </CFormGroup>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      )}
    </div>
  );
}

import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import {
  CButton,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CLabel,
  CSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import inputValidate from "src/static/InputValidate";
import { CREATE_DATA_API_REQ, IS_OPEN_MODAL_REQ } from "src/actionType";

export default function CreateForm() {
  //--redux && redux-saga
  const DropDownApi = useSelector(
    ({ setDropDownApi }) => setDropDownApi.dropdown
  );

  const dispatch = useDispatch();
  const action = (type, payload) => dispatch({ type, payload });
  //--end redux && redux-saga

  const { register, handleSubmit, errors } = useForm({});
  const onSubmit = (inputData, e) => {
    console.log("inputData", inputData);
    e.target.reset();
    action(CREATE_DATA_API_REQ, {
      input: inputData,
      path: "Category/",
      subPath: "create",
    });
    action(IS_OPEN_MODAL_REQ, {
      isModal: false,
      component: null,
      modalHeader: null,
    });
  };

  return (
    <div>
      <CForm onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="name">Name</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CInput
              innerRef={register(inputValidate.name)}
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name..."
            />
            <CFormText className="help-block">
              {errors.name && (
                <span className="text-danger">{errors.name.message}</span>
              )}
            </CFormText>
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="detail">Detail</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CInput
              innerRef={register(inputValidate.detail)}
              type="text"
              id="detail"
              name="detail"
              placeholder="Enter detail..."
            />
            <CFormText className="help-block">
              {errors.detail && (
                <span className="text-danger">{errors.detail.message}</span>
              )}
            </CFormText>
          </CCol>
        </CFormGroup>

        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="store_id">Store</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CSelect custom name="store_id" id="store_id" innerRef={register}>
              {DropDownApi.DDStore.map((item , index) => {
                return <option key={index} value={item.id}>{item.name}</option>;
              })}
            </CSelect>
          </CCol>
        </CFormGroup>

        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="main_category_id">Main Category</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CSelect
              custom
              name="main_category_id"
              id="main_category_id"
              innerRef={register}
            >
              {DropDownApi.DDMainCategory.map((item ,index) => {
                return <option  key={index} value={item.id}>{item.name}</option>;
              })}
            </CSelect>
          </CCol>
        </CFormGroup>

        <CButton type="reset" size="sm" color="danger">
          <CIcon name="cil-ban" /> Reset
        </CButton>
        <CButton
          type="submit"
          size="sm"
          className="float-right"
          color="primary"
        >
          <CIcon name="cil-scrubber" /> Submit
        </CButton>
      </CForm>
    </div>
  );
}

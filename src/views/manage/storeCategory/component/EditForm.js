import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import {
  CButton,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CLabel,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import inputValidate from "src/static/InputValidate";
import { STORE_UPDATE_DATA_API_REQ } from "src/sagaType/storeManage";
import { IS_OPEN_MODAL_REQ } from "src/sagaType/modal";
// import { UPDATE_DATA_API_REQ } from "src/sagaReducer/node_modules/src/sagaActionType";

export default function EditForm(props) {
  // redux && redux-saga
  const dispatch = useDispatch();
  const action = (type, payload) => dispatch({ type, payload });
  const dataAll = useSelector(({ setStoreManage }) => setStoreManage.data);
  //--end redux && redux-saga
  const findObject = (id) => dataAll.filter((item) => item.id === id)[0];
  //find in object
  const data = findObject(props.id);
  console.log(" data in edit Form", data);
  const { register, handleSubmit, errors } = useForm({
    defaultValues: data,
  });
  const onSubmit = (inputData, e) => {
    console.log("inputData", inputData);
    action(STORE_UPDATE_DATA_API_REQ, {
      input: inputData,
      subPath: "update",
    });
    action(IS_OPEN_MODAL_REQ, {
      isModal: false,
      component: null,
      modalHeader: null,
    });
    e.target.reset();
  };

  return (
    <div>
      <CForm onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="name">name</CLabel>
          </CCol>
          <CInput innerRef={register} type="hidden" name="id" />
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

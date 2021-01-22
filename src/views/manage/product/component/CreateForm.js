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
  CSwitch,
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
    console.log("inputData", inputData.img_path[0]);
    // e.target.reset();
    action(CREATE_DATA_API_REQ, {
      input: inputData.img_path[0],
      path: "Product/",
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
        {/* <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="type_id">Type</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CSelect custom name="type_id" id="type_id" innerRef={register}>
              {DropDownApi.DDType.map((item, index) => {
                return (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </CSelect>
          </CCol>
        </CFormGroup>

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
            <CLabel htmlFor="price">Price</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CInput
              innerRef={register(inputValidate.price)}
              type="text"
              id="price"
              name="price"
              placeholder="Enter Price..."
            />
            <CFormText className="help-block">
              {errors.price && (
                <span className="text-danger">{errors.price.message}</span>
              )}
            </CFormText>
          </CCol>
        </CFormGroup>

        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="amount">Amount</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CInput
              innerRef={register(inputValidate.amount)}
              type="text"
              id="amount"
              name="amount"
              placeholder="Enter Amount..."
            />
            <CFormText className="help-block">
              {errors.amount && (
                <span className="text-danger">{errors.amount.message}</span>
              )}
            </CFormText>
          </CCol>
        </CFormGroup>

        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="amount">Active</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CSwitch
              innerRef={register}
              className={"mx-1"}
              shape={"pill"}
              color={"success"}
              labelOn={"\u2713"}
              labelOff={"\u2715"}
              id="active"
              name="active"
              defaultChecked
            />
          </CCol>
        </CFormGroup>

        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="recommended_type">Recommended</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CSelect
              custom
              name="recommended_type"
              id="recommended_type"
              innerRef={register}
            >
              {DropDownApi.DDRecommended_type.map((item, index) => {
                return (
                  <option key={index} value={index}>
                    {item}
                  </option>
                );
              })}
            </CSelect>
          </CCol>
        </CFormGroup>

        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="sku">Sku</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CInput
              innerRef={register}
              type="text"
              id="sku"
              name="sku"
              placeholder="Enter Sku..."
            />
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
        </CFormGroup> */}

        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="img_path">img</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CInput
              innerRef={register}
              type="file"
              id="img_path"
              name="img_path"
              placeholder="Enter detail..."
            />
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

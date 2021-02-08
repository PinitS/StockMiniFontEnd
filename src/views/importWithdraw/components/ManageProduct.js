import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CCol,
  CButton,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CLabel,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useForm } from "react-hook-form";
import inputValidate from "../../../static/InputValidate";
import { IS_OPEN_MODAL_REQ } from "src/sagaType/modal";
import { PRODUCT_CREATE_HISTORY_DATA_API_REQ } from "src/sagaType/productStock";

export default function ManageProduct(props) {
  const { register, handleSubmit, errors } = useForm({});

  const dispatch = useDispatch();
  const action = (type, payload) => dispatch({ type, payload });
  const redirect = useSelector(({ setProductFilter }) => setProductFilter.input);

  if (props.mode == 0) {
    inputValidate.amount.max = {
      value: props.amount,
      message: "Amount too much",
    };
  } else {
    delete inputValidate.amount.max;
  }

  const onSubmit = (inputData, e) => {
    inputData.amount = parseInt(inputData.amount);
    console.log("inputData", inputData);

    action(PRODUCT_CREATE_HISTORY_DATA_API_REQ, {
      input: inputData,
      redirectInput: redirect,
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
            <CLabel htmlFor="amount">Amount</CLabel>
            <CFormText className="help-block">
              {props.mode == 0 && (
                <span className="text-success">balance : {props.amount}</span>
              )}
            </CFormText>
          </CCol>
          {/* dummy userID */}
          <CInput
            innerRef={register}
            type="hidden"
            name="user_id"
            defaultValue={1}
          />
          {/* dummy userID */}
          <CInput
            innerRef={register}
            type="hidden"
            name="id"
            defaultValue={props.id}
          />
          <CInput
            innerRef={register}
            type="hidden"
            name="mode"
            defaultValue={props.mode}
          />
          <CCol xs="12" md="9">
            <CInput
              innerRef={register(inputValidate.amount)}
              type="number"
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

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
import inputValidate from "../../../../../static/InputValidate";
import { IS_OPEN_MODAL_REQ } from "src/sagaType/modal";
import { CHANGE_ITEM_IN_CART_REQ } from "src/sagaType/cart";

export default function AmountForm(props) {
  const { register, handleSubmit, errors } = useForm({});
  const dispatch = useDispatch();
  const action = (type, payload) => dispatch({ type, payload });

  const redirect = useSelector(({ setCashier }) => setCashier.input);

  inputValidate.amount.max = {
    value: (props.item.max_amount + props.item.amount),
    message: "Amount too much",
  };

  const onSubmit = (inputData, e) => {
    inputData.amount = parseInt(inputData.amount);
    inputData.order_id = props.item.order_id;
    inputData.orderDetails_id = props.item.orderDetails_id;
    inputData.product_id = props.item.product_id;

    action(CHANGE_ITEM_IN_CART_REQ, {
      user_id : inputData.user_id,
      input: inputData,
      redirect: redirect,
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
              <span className="text-success">
                balance : {props.item.max_amount + props.item.amount}
              </span>
            </CFormText>
          </CCol>
          {/* dummy userID */}
          <CInput
            innerRef={register}
            type="hidden"
            name="user_id"
            defaultValue={1}
          />
          {/* dummy id */}
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

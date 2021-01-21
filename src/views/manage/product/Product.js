import React from "react";
import { useForm } from "react-hook-form";
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

export default function Product() {
    const dataTT = {
        name : "YYYYYYY",
        detail:"xxxxxxxxxxxxxxxxxx"
    }
  const { register, handleSubmit, errors } = useForm({
      defaultValues : dataTT
  });
  const onSubmit = (data) => {
    console.log('data', data)
    console.log("send " + JSON.stringify(data) +" to serve");
  };

  


  React.useEffect(() => {
    
  }, [])



  console.log("errors", errors);
  return (
    <div>
      <CForm onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="name">Name</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CInput
              innerRef={register(inputValidate.Name)}
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
              innerRef={register(inputValidate.Detail)}
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

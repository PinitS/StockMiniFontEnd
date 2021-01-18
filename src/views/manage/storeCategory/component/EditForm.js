import React from "react";

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

export default function EditForm() {
  return (
    <div>
      <CForm action="" method="post" className="form-horizontal">
        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="hf-name">Name</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CInput
              type="text"
              id="hf-name"
              name="hf-name"
              placeholder="Enter Name..."
            />
            <CFormText className="help-block">
              Please enter Store Name
            </CFormText>
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol md="3">
            <CLabel htmlFor="hf-detail">Detail</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CInput
              type="text"
              id="hf-detail"
              name="hf-detail"
              placeholder="Enter detail..."
            />
            <CFormText className="help-block">
              Please enter Store detail
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

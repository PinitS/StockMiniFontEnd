import React from "react";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CSelect,
  CButton,
  CFormGroup,
} from "@coreui/react";
import { useForm } from "react-hook-form";
import CIcon from "@coreui/icons-react";
import { SELECT_STORE_REQ } from "src/sagaType/selectStore";
import { useDispatch, useSelector } from "react-redux";

export default function Filter() {
  const { register, handleSubmit, errors } = useForm({});

  const dataDropdown = useSelector(({ setDropdown }) => setDropdown.data);
  const dispatch = useDispatch();
  const action = (type, payload) => dispatch({ type, payload });

  const onsubmit = (inputData) => {
    action(SELECT_STORE_REQ, inputData.store_id);
  };

  return (
    <div>
      <CCard>
        <CCardHeader>Select Store</CCardHeader>
        <CCardBody>
          <CFormGroup>
            {dataDropdown && (
              <CSelect custom name="store_id" id="store_id" innerRef={register}>
                {Object.entries(dataDropdown.DDStore).map(([key, value]) => {
                  return (
                    <option key={key} value={key}>
                      {value}
                    </option>
                  );
                })}
              </CSelect>
            )}
          </CFormGroup>

          <CFormGroup className="text-center">
            <CButton
              type="submit"
              size="sm"
              color="primary"
              onClick={handleSubmit(onsubmit)}
            >
              <CIcon name="cil-scrubber" /> Submit
            </CButton>
          </CFormGroup>
        </CCardBody>
      </CCard>
    </div>
  );
}

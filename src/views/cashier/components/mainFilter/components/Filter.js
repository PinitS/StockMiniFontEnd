import React from "react";

import {
  CRow,
  CCol,
  CLabel,
  CSelect,
  CInput,
} from "@coreui/react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { GET_DROPDOWN_DATA_API_REQ } from "src/sagaType/allDropdown";
import { CASHIER_CALL_FILTER_DATA_API_REQ } from "src/sagaType/cashier";

export default function Filter() {
  const dispatch = useDispatch();
  const action = (type, payload) => dispatch({ type, payload });
  const dataDropdown = useSelector(({ setDropdown }) => setDropdown.data);

  const { register, handleSubmit, getValues, errors } = useForm({});

  const onChangeFilter = () => {
    let input = {
      main_category_id: getValues("main_category_id"),
      product_name:
        getValues("product_name") == "" ? null : getValues("product_name"),
    };
    console.log("input", input);
    action(CASHIER_CALL_FILTER_DATA_API_REQ, {
      input: input,
    });
  };

  React.useEffect(() => {
    action(GET_DROPDOWN_DATA_API_REQ);
  }, []);

  return (
    <div>
      <CRow>
        <CCol md="2">
          <CLabel className="mt-2 mb-0" htmlFor="main_category_id">
            Main Category :
          </CLabel>
        </CCol>
        <CCol md="4">
          {dataDropdown && (
            <CSelect
              custom
              name="main_category_id"
              id="main_category_id"
              innerRef={register}
              onChange={onChangeFilter}
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
          )}
        </CCol>
        {/* search */}
        <CCol md="2">
          <CLabel className="mt-2 mb-0" htmlFor="name">
            Search :
          </CLabel>
        </CCol>
        <CCol md="4">
          <CInput
            innerRef={register}
            type="text"
            id="product_name"
            name="product_name"
            placeholder="Enter product name..."
            onKeyUp={() => {
              onChangeFilter();
            }}
          />
        </CCol>
      </CRow>
    </div>
  );
}

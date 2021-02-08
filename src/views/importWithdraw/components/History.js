import React from "react";
import moment from "moment";

import {
  CDataTable,
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CButton,
  CFormGroup,
  CCollapse,
  CInputGroup,
  CInput,
  CInputGroupAppend,
  CBadge,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import {
  CALL_PRODUCT_HISTORY_DATA_API_REQ,
  CHANGE_PRODUCT_HISTORY_DATA_API_REQ,
} from "src/sagaType/productHistory";

const fields = [
  { key: "#" },
  { key: "name" },
  { key: "id" },
  { key: "amount" },
  { key: "type" },
  { key: "detail" },
  { key: "user_id" },
  { key: "created_at", label: "date" },
  {
    key: "Edit",
    sorter: false,
    filter: false,
  },
  {
    key: "active",
    sorter: false,
    filter: false,
  },
];

export default function History(props) {
  const dispatch = useDispatch();
  const data = useSelector(({ setProductHistory }) => setProductHistory.data);
  const action = (type, payload) => dispatch({ type, payload });

  const redirect = useSelector(
    ({ setProductFilter }) => setProductFilter.input
  );

  const [details, setDetails] = React.useState([]);

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };
  const { register, handleSubmit, getValues, errors } = useForm({});
  React.useEffect(() => {
    action(CALL_PRODUCT_HISTORY_DATA_API_REQ, { id: props.id });
  }, []);

  const onChangeStatus = (input) => {
    console.log("input", input);
    action(CHANGE_PRODUCT_HISTORY_DATA_API_REQ, {
      input: input,
      subPath: "changeStatus",
      redirectInput: redirect,
      id: props.id,
    });
  };

  const color = ["primary", "danger"];

  const onChangeAmount = (input, position) => {
    console.log("onChangeAmount position", position);
    action(CHANGE_PRODUCT_HISTORY_DATA_API_REQ, {
      input: input,
      subPath: "changeAmountHistory",
      redirectInput: redirect,
      id: props.id,
    });
    toggleDetails(position);
  };

  return (
    <div>
      <CContainer fluid>
        <CRow>
          <CCol sm="12">
            <CCard>
              <CCardBody>
                {data && (
                  <CDataTable
                    items={data}
                    fields={fields}
                    tableFilter
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover
                    sorter
                    pagination
                    scopedSlots={{
                      "#": (item, index) => {
                        return <td>{index + 1}</td>;
                      },
                      created_at: (item, index) => (
                        <td>{moment(item.created_at).format("l")}</td>
                      ),
                      type: (item, index) => (
                        <td>
                          <CBadge
                            color={item.type == "Import" ? "primary" : "danger"}
                          >
                            {item.type}
                          </CBadge>
                        </td>
                      ),

                      Edit: (item, index) => (
                        <td>
                          <CButton
                            className="mr-2"
                            color="primary"
                            size="sm"
                            onClick={() => {
                              toggleDetails(index);
                            }}
                          >
                            {details.includes(index) ? "Hide" : "Show"}{" "}
                          </CButton>
                        </td>
                      ),
                      active: (item, index) => (
                        <td key={item.id}>
                          <CButton
                            innerRef={register}
                            id={item.id}
                            name={item.id}
                            size="sm"
                            color={color[item.status]}
                            onClick={() => {
                              let input = {
                                id: item.id,
                                status: Math.abs(item.status - 1),
                              };
                              onChangeStatus(input);
                            }}
                          >
                            {item.status == 1 ? "ON" : "OFF"}
                          </CButton>
                        </td>
                      ),
                      details: (item, index) => {
                        return (
                          <CCollapse show={details.includes(index)}>
                            <CCardBody>
                              <div className="justify-content-center row">
                                <div className="col-md-6">
                                  <h4 className="text-center">
                                    Edit #{index + 1}
                                  </h4>
                                  <CFormGroup className="mt-2 mb-0">
                                    <CInputGroup>
                                      <CInput
                                        innerRef={register}
                                        type="number"
                                        id={"amount" + item.id}
                                        name={"amount" + item.id}
                                        defaultValue={item.amount}
                                      />
                                      <CInput
                                        innerRef={register}
                                        type="hidden"
                                        id={"id" + item.id}
                                        name={"id" + item.id}
                                        defaultValue={item.id}
                                      />

                                      <CInputGroupAppend>
                                        <CButton
                                          onClick={() => {
                                            console.log("item.id", item.id);
                                            let input = {
                                              amount: getValues(
                                                "amount" + item.id
                                              ),
                                              id: getValues("id" + item.id),
                                            };
                                            let position = index;
                                            onChangeAmount(input, position);
                                          }}
                                          color="primary"
                                        >
                                          Submit
                                        </CButton>
                                      </CInputGroupAppend>
                                    </CInputGroup>
                                  </CFormGroup>
                                </div>
                              </div>
                            </CCardBody>
                          </CCollapse>
                        );
                      },
                    }}
                  />
                )}
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}

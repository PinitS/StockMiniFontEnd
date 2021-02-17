import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SERVICE_CHANGE_STATUS_ORDER, SERVICE_CHANGE_STATUS_ORDER_REQ, SERVICE_GET_ORDER_REQ } from "src/sagaType/serviceOrder";
import {
  CRow,
  CContainer,
  CCardBody,
  CCard,
  CDataTable,
  CCol,
  CBadge,
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { colorConfigColor, colorConfigText } from "src/static/colorConfig";
import { CHANGE_STATUS_ORDER_REQ } from "src/sagaType/order";

export default function ServiceStore() {
  const dispatch = useDispatch();
  const action = (type, payload) => dispatch({ type, payload });
  const dataService = useSelector(
    ({ setServiceStore }) => setServiceStore.data
  );

  const fields = [
    { key: "#" },
    { key: "order_id", label: "Order" },
    { key: "name" },
    { key: "amount" },
    { key: "status" },
  ];

  React.useEffect(() => {
    action(SERVICE_GET_ORDER_REQ);
  }, []);

  const changeStatusOrder = (id) => {
    let input = {
      id: id,
      status: 2,
    };
    action(SERVICE_CHANGE_STATUS_ORDER_REQ, {
      input: input,
      user_id: 1,
    });
  };

  return (
    <div>
      {dataService && (
        <CContainer fluid>
          <CRow>
            <CCol md="8" className="mx-auto">
              {dataService.map((item, index) => {
                let checkBtn = false;
                const result = item.find((check) => {
                  return check.status === 0;
                });
                if (result != undefined) {
                  checkBtn = true;
                }
                return (
                  <CCard key={index}>
                    <CCardBody>
                      <strong>Order : {item[0].order_id}</strong>

                      <div className="card-header-actions">
                        <CButton
                          color="success"
                          size="sm"
                          disabled={checkBtn}
                          onClick={() => {
                            changeStatusOrder(item[0].order_id);
                          }}
                        >
                          Checked
                        </CButton>
                      </div>

                      <div className="text-center mt-3">
                        <CDataTable
                          key={index}
                          items={item}
                          fields={fields}
                          scopedSlots={{
                            "#": (item, index) => <td>{index + 1}</td>,
                            status: (item, index) => (
                              <td>
                                <CBadge color={colorConfigColor[item.status]}>
                                  {colorConfigText[item.status]}
                                </CBadge>
                              </td>
                            ),
                          }}
                        />
                      </div>
                    </CCardBody>
                  </CCard>
                );
              })}
            </CCol>
          </CRow>
        </CContainer>
      )}
    </div>
  );
}

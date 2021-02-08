import React from "react";

import {
  CDataTable,
  CCard,
  CCardHeader,
  CCardBody,
} from "@coreui/react";

import usersDataHalf from "../../users/UsersDataHalf";
const fields = ["name", "registered", "role", "status"];

export default function Cart() {
  return (
    <div>
      <CCard>
        <CCardHeader>
          <strong>Cart</strong>
        </CCardHeader>
        <CCardBody>
          <CDataTable items={usersDataHalf} fields={fields} />
        </CCardBody>
      </CCard>
    </div>
  );
}

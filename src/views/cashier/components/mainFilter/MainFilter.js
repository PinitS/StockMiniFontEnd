import React from "react";

import { CRow, CCol } from "@coreui/react";
import ConfirmOrder from "./components/ConfirmOrder";
import Filter from "./components/Filter";

export default function MainFilter() {
  return (
    <div>
      <CRow>
        <CCol md="7">
            <Filter/>
        </CCol>
        <CCol md="5">
          <ConfirmOrder />
        </CCol>
      </CRow>
    </div>
  );
}

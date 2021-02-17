import React, { Component } from "react";

import { CContainer, CRow, CCol, CDataTable } from "@coreui/react";

export default class PrintStoreOrder extends Component {
  render() {
    const fields = [
      { key: "#" },
      { key: "order_id", label: "Order" },
      { key: "name" },
      { key: "amount" },
    ];


    return (
      <CContainer fluid>
        <CRow>
          <CCol>
            <div className="pt-5">
              <h1 className="mb-5">Order Confirm</h1>
              <CDataTable
                items={this.props.value}
                fields={fields}
                border
                scopedSlots={{
                  "#": (item, index) => <td>{index + 1}</td>,
                }}
              />
            </div>
          </CCol>
        </CRow>
      </CContainer>
    );
  }
}

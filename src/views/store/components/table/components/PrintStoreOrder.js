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

    let data = this.props.value;
    console.log("data", data);
    return (
      <CContainer fluid>
        <CRow>
          <CCol>
            <div className="pt-5">
              <h1 className="text-center mb-5">Order Confirm</h1>

              <CDataTable
              className="mt-5"
                items={this.props.value}
                fields={fields}
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

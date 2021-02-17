import React, { Component } from "react";

import { CContainer, CRow, CCol, CDataTable } from "@coreui/react";

export default class PrintCartOrder extends Component {
  render() {
    const fields = [
      { key: "#" },
      { key: "name" },
      { key: "amount" },
      { key: "price" },
      { key: "sum_price", label: "sum" },
    ];
    return (
      <div>
        <CContainer fluid>
          <CRow>
            <CCol>
              <div className="pt-5">
                <h1>Order Confirm Order : {this.props.order}</h1>
                <CDataTable
                  items={this.props.data}
                  fields={fields}
                  scopedSlots={{
                    "#": (item, index) => <td>{index + 1}</td>,
                  }}
                />
              </div>
            </CCol>
          </CRow>
          <CRow>
            <CCol></CCol>
            <CCol>
              {this.props.sum && (
                <CRow>
                  <CCol className="text-center">
                    <strong>Sub Total</strong>
                  </CCol>
                  <CCol className="text-center">
                    <strong>{this.props.sum.sum_all_price}</strong>
                  </CCol>
                </CRow>
              )}
            </CCol>
          </CRow>
        </CContainer>
      </div>
    );
  }
}

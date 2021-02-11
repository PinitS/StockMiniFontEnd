import React, { useState } from "react";
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader,
  CDataTable,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { DocsLink } from "src/reusable";

const Tabs = () => {
  const [active, setActive] = useState(1);
  const arr = [0, 1, 2, 3, 4, 5, 6, 7];
  const arr_text = ["x0", "x1", "x2", "x3", "x4", "x5", "x6", "x7"];
  const fields = [
    { key: "#" },
    { key: "name" },
    { key: "amount" },
    { key: "price" },
    { key: "sum_price" },
  ];
  const fieldsFooter = [
    { key: "" },
    { key: "" },
    { key: "" },
    { key: "sum_all_amount" },
    { key: "sum_all_price" },
  ];
  const dataSet = [
    {
      data: [
        {
          orderDetails_id: 1,
          name: "Product 1",
          product_id: 1,
          amount: 1,
          price: 1000,
          sum_price: 1000,
        },
        {
          orderDetails_id: 2,
          name: "Product 2",
          product_id: 2,
          amount: 1,
          price: 2000,
          sum_price: 2000,
        },
      ],
      sum: {
        sum_all_amount: 2,
        sum_all_price: 3000,
      },
      order_id: 1,
    },
    {
      data: [
        {
          orderDetails_id: 3,
          name: "Product 1",
          product_id: 1,
          amount: 2,
          price: 1000,
          sum_price: 2000,
        },
        {
          orderDetails_id: 4,
          name: "Product 2",
          product_id: 2,
          amount: 2,
          price: 2000,
          sum_price: 4000,
        },
      ],
      sum: {
        sum_all_amount: 6,
        sum_all_price: 9000,
      },
      order_id: 2,
    },
    {
      data: [
        {
          orderDetails_id: 5,
          name: "Product 1",
          product_id: 1,
          amount: 3,
          price: 1000,
          sum_price: 3000,
        },
        {
          orderDetails_id: 6,
          name: "Product 2",
          product_id: 2,
          amount: 3,
          price: 2000,
          sum_price: 6000,
        },
      ],
      sum: {
        sum_all_amount: 12,
        sum_all_price: 18000,
      },
      order_id: 3,
    },
    {
      data: [
        {
          orderDetails_id: 7,
          name: "Product 1",
          product_id: 1,
          amount: 4,
          price: 1000,
          sum_price: 4000,
        },
        {
          orderDetails_id: 8,
          name: "Product 2",
          product_id: 2,
          amount: 4,
          price: 2000,
          sum_price: 8000,
        },
      ],
      sum: {
        sum_all_amount: 20,
        sum_all_price: 30000,
      },
      order_id: 4,
    },
    {
      data: [
        {
          orderDetails_id: 9,
          name: "Product 2",
          product_id: 2,
          amount: 10,
          price: 2000,
          sum_price: 20000,
        },
      ],
      sum: {
        sum_all_amount: 30,
        sum_all_price: 50000,
      },
      order_id: 5,
    },
    {
      data: [
        {
          orderDetails_id: 10,
          name: "Product 1",
          product_id: 1,
          amount: 5,
          price: 1000,
          sum_price: 5000,
        },
        {
          orderDetails_id: 11,
          name: "Product 2",
          product_id: 2,
          amount: 5,
          price: 2000,
          sum_price: 10000,
        },
      ],
      sum: {
        sum_all_amount: 40,
        sum_all_price: 65000,
      },
      order_id: 6,
    },
  ];
  console.log("dataSet", dataSet);

  const lorem = "aaaaaa";

  return (
    <CRow>
      {/* <CCol xs="12" md="6" className="mb-4">
        <CCard>
          <CCardHeader>
            Index indentifiers
            <DocsLink name="CTabs" />
          </CCardHeader>
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>Home</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>Profile</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>Messages</CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>{`1. ${lorem}`}</CTabPane>
                <CTabPane>{`2. ${lorem}`}</CTabPane>
                <CTabPane>{`3. ${lorem}`}</CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol> */}

      <CCol xs="6" md="6" className="mb-4">
        <CCard>
          <CCardHeader>Id indentifiers</CCardHeader>
          <CCardBody>
            <CTabs activeTab="cart">
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink data-tab="cart">Cart</CNavLink>
                </CNavItem>
                {dataSet.map((item, index) => (
                  <CNavItem key={index}>
                    <CNavLink data-tab={index}>
                      Order : {item.order_id}
                    </CNavLink>
                  </CNavItem>
                ))}
              </CNav>
              <CTabContent>
                <CTabPane data-tab="cart">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum{" "}
                </CTabPane>
              </CTabContent>
              {dataSet.map((item, index) => (
                <CTabContent key={index}>
                  <CTabPane data-tab={index}>
                    <CDataTable
                      items={item.data}
                      fields={fields}
                      itemsPerPage={10}
                      pagination
                      striped
                      scopedSlots={{
                        "#": (item, index) => <td>{index + 1}</td>,
                      }}
                    />
                  </CTabPane>
                </CTabContent>
              ))}
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs="12" md="6" className="mb-4">
        <CCard>
          <CCardHeader>No fade animation tabs</CCardHeader>
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-calculator" />
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-basket" />
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-chart-pie" />
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent fade={false}>
                <CTabPane>{`1. ${lorem}`}</CTabPane>
                <CTabPane>{`2. ${lorem}`}</CTabPane>
                <CTabPane>{`3. ${lorem}`}</CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs="12" md="6" className="mb-4">
        <CCard>
          <CCardHeader>Controlled tabs</CCardHeader>
          <CCardBody>
            <CTabs
              activeTab={active}
              onActiveTabChange={(idx) => setActive(idx)}
            >
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-calculator" />
                    {active === 0 && " Home"}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-basket" />
                    {active === 1 && " Profile"}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-chart-pie" />
                    {active === 2 && " Messages"}
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>{`1. ${lorem}`}</CTabPane>
                <CTabPane>{`2. ${lorem}`}</CTabPane>
                <CTabPane>{`3. ${lorem}`}</CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Tabs;

import React from "react";

import {
  CBadge,
  CDataTable,
  CContainer,
  CButton,
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
} from "@coreui/react";

const fields = [
  { key: "#" },
  // { key: "name" , _style: { width: "30%" }},
  { key: "name", _style: { width: "30%" } },
  { key: "registered", _style: { width: "10%" } },
  { key: "role", _style: { width: "10%" } },
  { key: "status", _style: { width: "10%" } },
  {
    key: "action",
    // label: "",
    _style: { width: "10%" },
    sorter: false,
    filter: false,
  },
];

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

const usersData = [
  {
    id: 0,
    name: "John Doe",
    registered: "2018/01/01",
    role: "Guest",
    status: "Pending",
  },
  {
    id: 1,
    name: "Samppa Nori",
    registered: "2018/01/01",
    role: "Member",
    status: "Active",
  },
  {
    id: 2,
    name: "Estavan Lykos",
    registered: "2018/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    id: 3,
    name: "Chetan Mohamed",
    registered: "2018/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Derick Maximinus",
    registered: "2018/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    id: 5,
    name: "Friderik Dávid",
    registered: "2018/01/21",
    role: "Staff",
    status: "Active",
  },
  {
    id: 6,
    name: "Yiorgos Avraamu",
    registered: "2018/01/01",
    role: "Member",
    status: "Active",
  },
  {
    id: 7,
    name: "Avram Tarasios",
    registered: "2018/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    id: 8,
    name: "Quintin Ed",
    registered: "2018/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 9,
    name: "Enéas Kwadwo",
    registered: "2018/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    id: 10,
    name: "Agapetus Tadeáš",
    registered: "2018/01/21",
    role: "Staff",
    status: "Active",
  },
  {
    id: 11,
    name: "Carwyn Fachtna",
    registered: "2018/01/01",
    role: "Member",
    status: "Active",
  },
  {
    id: 12,
    name: "Nehemiah Tatius",
    registered: "2018/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    id: 13,
    name: "Ebbe Gemariah",
    registered: "2018/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 14,
    name: "Eustorgios Amulius",
    registered: "2018/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    id: 15,
    name: "Leopold Gáspár",
    registered: "2018/01/21",
    role: "Staff",
    status: "Active",
  },
  {
    id: 16,
    name: "Pompeius René",
    registered: "2018/01/01",
    role: "Member",
    status: "Active",
  },
  {
    id: 17,
    name: "Paĉjo Jadon",
    registered: "2018/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    id: 18,
    name: "Micheal Mercurius",
    registered: "2018/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 19,
    name: "Ganesha Dubhghall",
    registered: "2018/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    id: 20,
    name: "Hiroto Šimun",
    registered: "2018/01/21",
    role: "Staff",
    status: "Active",
  },
  {
    id: 21,
    name: "Vishnu Serghei",
    registered: "2018/01/01",
    role: "Member",
    status: "Active",
  },
  {
    id: 22,
    name: "Zbyněk Phoibos",
    registered: "2018/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    id: 23,
    name: "Aulus Agmundr",
    registered: "2018/01/01",
    role: "Member",
    status: "Pending",
  },
  {
    id: 42,
    name: "Ford Prefect",
    registered: "2001/05/25",
    role: "Alien",
    status: "Don't panic!",
  },
];

export default function StoreCategory() {
  return (
    <div>
      <CContainer fluid>
        <CRow>
          <CCol sm="12">
            <CCard>
              <CCardHeader>Header</CCardHeader>
              <CCardBody>
                <CDataTable
                  items={usersData}
                  fields={fields}
                  tableFilter
                  itemsPerPageSelect
                  itemsPerPage={20}
                  hover
                  sorter
                  pagination
                  scopedSlots={{
                    "#": (item, index) => <td>{index + 1}</td>,
                    status: (item) => (
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    ),
                    action: (item) => (
                      <td>
                        <CRow>
                          <CCol col="3" sm="3" md="3">
                            <CButton
                              color="warning"
                              className="mr-3"
                              size="sm"
                              onClick={() => {
                                console.log("edit btn", item.id);
                              }}
                            >
                              Edit
                            </CButton>
                          </CCol>
                          <CCol col="3" sm="6" md="6">
                            <CButton
                              color="danger"
                              size="sm"
                              onClick={() => {
                                console.log("delete btn", item.id);
                              }}
                            >
                              Delete
                            </CButton>
                          </CCol>
                        </CRow>
                      </td>
                    ),
                  }}
                />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}

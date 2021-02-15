import React from "react";
import { CCol, CRow, CContainer } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DROPDOWN_DATA_API_REQ } from "src/sagaType/allDropdown";
import Filter from "./components/filter/Filter";
import MainTable from "./components/table/MainTable";

export default function Store() {
  const setSelStore = useSelector(({ setSelectStore }) => setSelectStore.store);
  const dispatch = useDispatch();

  const action = (type, payload) => dispatch({ type, payload });
  React.useEffect(() => {
    action(GET_DROPDOWN_DATA_API_REQ);
  }, []);

  return (
    <div>
      <CContainer fluid>
        {setSelStore == null && (
          <CRow>
            <CCol md="6" className="mx-auto">
              <Filter />
            </CCol>
          </CRow>
        )}

        {setSelStore && (
          <CRow>
            <CCol sm="12">
              <MainTable />
            </CCol>
          </CRow>
        )}
      </CContainer>
    </div>
  );
}

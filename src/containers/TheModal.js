import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IS_OPEN_MODAL_REQ } from "../actionType";

import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

const Modals = () => {
  const dispatch = useDispatch();
  const isModal = useSelector(({ setModal }) => setModal);
  const action = (type, payload) => dispatch({ type, payload });
  console.log("isModal", isModal.isModal);

  return (
    <CModal
      show={isModal.isModal}
      onClose={() =>
        action(IS_OPEN_MODAL_REQ, {
          isModal: false,
          component: null,
          modalHeader: null,
        })
      }
      size="lg"
    >
      <CModalHeader closeButton>
        <CModalTitle> {isModal.modalHeader}</CModalTitle>
      </CModalHeader>
      <CModalBody>{isModal.component}</CModalBody>
    </CModal>
  );
};

export default Modals;

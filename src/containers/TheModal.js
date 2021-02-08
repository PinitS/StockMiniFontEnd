import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { IS_OPEN_MODAL_REQ } from "src/sagaType/modal";

const Modals = () => {
  const dispatch = useDispatch();
  const isModal = useSelector(({ setModal }) => setModal);
  const action = (type, payload) => dispatch({ type, payload });

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
      size={isModal.size}
    >
      <CModalHeader closeButton>
        <CModalTitle> {isModal.modalHeader}</CModalTitle>
      </CModalHeader>
      <CModalBody>{isModal.component}</CModalBody>
    </CModal>
  );
};

export default Modals;

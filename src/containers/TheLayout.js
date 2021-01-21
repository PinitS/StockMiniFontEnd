import React from "react";
import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";
import TheModal from "./TheModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TheLayout = () => {
  return (
    <div className="c-app c-default-layout">
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <ToastContainer />
          <TheModal />
          <TheContent />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayout;

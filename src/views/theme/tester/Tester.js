import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./ComponentToPrint";

export default function Tester() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <ComponentToPrint value="Props To component" ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
}

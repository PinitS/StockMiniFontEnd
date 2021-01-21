import React from "react";

export default function MainCategory() {
  function fn1() {
    console.log("fn1");
  }
  function fn2() {
    console.log("fn2");
  }
  function fn3() {
    setTimeout(function () {
      console.log("fn3 set time 3 sec");
    }, 3000);
  }
  return (
    <div>
      <h1>MainCategory</h1>
      <button
        onClick={() => {
          fn1();
          fn3();
          fn2();

          // fn1(fn2(fn3()));
        }}
        type="button"
        className="btn btn-primary"
      ></button>
    </div>
  );
}

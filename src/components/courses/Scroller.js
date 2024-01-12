import React from "react";
import './scroller.css'

export default function Scroller() {
  return (
    <div>
      <div className="scroll-container">
        <div className="scroll-page" id="page-1">
          <p className="p-main">one</p>
        </div>
        <div className="scroll-page" id="page-2">
        <p className="p-main">two</p>
        </div>
        <div className="scroll-page" id="page-3">
        <p className="p-main">three</p>
        </div>
      </div>
    </div>
  );
}

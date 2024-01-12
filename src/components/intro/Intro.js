import React from "react";
import "./Intro.css";
import intro from "./intro.jpg";

export default function Intro() {
  return (
    <div>
      <div className="main">
        <div className="main-lt">
          <h2>Welcome to Alpha tech</h2>
          <p>
            Confused on which course to take? I have got you covered. Browse
            courses and find out the best course for you. Its free! is my
            attempt to teach basics and those coding techniques to people in
            short time which took me ages to learn.
          </p>
        </div>
        <div className="main-rt">
          <img src={intro} alt="no image" />
        </div>
      </div>
    </div>
  );
}

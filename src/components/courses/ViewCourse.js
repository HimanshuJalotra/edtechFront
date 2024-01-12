import React from "react";
import Nav from "../nav/Nav";
import "./ViewCourse.css";
import Scroller from "./Scroller";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ViewCourse(props) {
  const location = useLocation();
  const { from } = location.state;
  console.log(from);

  const [classes, setClasses] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:3000/classes")
      .then((response) => response.json())
      .then((data) => setClasses(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(classes);

  return (
    <div>
      <Nav />
      <div>
        <div className="div-main">
        {classes.map((classe) => {
          if (classe.course_id === from) {
            return (
              <div>
                <div className="div-lf">
                  <iframe
                    width="756"
                    height="400"
                    src={classe.link}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>{" "}
                  <iframe src="" frameborder="0"></iframe>
                </div>

                <div className="div-mid"></div>

                <div className="div-rt">
                  <Scroller />
                </div>
                </div>
            );
          }
        })}
        </div>
      </div>
    </div>
  );
}

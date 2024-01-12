import React from "react";
import Register from "../register/Register";
import Contact from "../courses/Course";
import Login from "../login/Login";
import Nav from "../nav/Nav";
import Note from "../notes/Note";
import { useState, useEffect } from "react";
import './Home.css'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Intro from "../intro/Intro";
import Course from "../courses/Course";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

export default function Home() {

  const [courses, setCourses] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:3000/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Nav />
      <Intro />
      <div>
        <h3>Recommended Courses</h3>
        <div className="card-main">
          {courses.map((course) => (
            <Card sx={{ maxWidth: 340 }} className="card">
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={course.poster}
              />
              <CardContent>
                <div gutterBottom variant="h2" component="div">
                  <h4>{course.title}</h4>
                </div>
                <div variant="body2" color="text.secondary">
                  {course.discription}
                </div>
              </CardContent>
              <CardActions>
              <Link to='/subjects' state={{ from: `${course.id}` }}>
                <Button size="small">View course</Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

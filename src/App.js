import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/Home/Home";
import Course from "./components/courses/Course";
import Note from "./components/notes/Note";
import Register from "./components/register/Register";
import Contact from "./components/contact/Contact";
import Blog from "./components/Blog/Blog";
import ViewCourse from "./components/courses/ViewCourse";
import Subjects from "./components/courses/Subjects";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notes" element={<Note />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/viewCourse" element={<ViewCourse />} />
        <Route path="/subjects" element={<Subjects/>} />
      </Routes>
      
    </div>
  );
}

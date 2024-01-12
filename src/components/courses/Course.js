import React from 'react'
import Nav from '../nav/Nav'
import './Course.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";


export default function Course() {
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
      <Nav/>
      <div className='cour-main'>
      <div className="card-main">
          {courses.map((course) => (
            <Card sx={{ maxWidth: 340,marginTop:8 }} className="card">
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={course.poster}
              />
              <CardContent>
                <div gutterBottom variant="h5" component="div">
                  {course.title}
                </div>
                <div variant="body2" color="text.secondary">
                  {course.discription}
                </div>
              </CardContent>
              <CardActions>
                <Button size="small">view course</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

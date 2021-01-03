import React from 'react'

const Course = (props) =>
{
  console.log('Course props in Course.js:', props.courses[0])
  //{props.courses.map(element => <CourseElements courseElement = {element}/> )}
  // Toimiva alla
  // <CourseElements course = {props.courses[0]} />

   return (
      <div>
        {props.courses.map(courses => < CourseElements key={props.id} course = {courses} /> )}
      </div>
   )
}

const CourseElements = (props) =>
{
  console.log('CourseElements', props.course)
  const {name, id, parts} = props.course
  console.log('CourseElements props name: ', name, 'id: ', id, 'parts:', parts)
  const totalAmount = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div key={id}>
      <h2> {name}</h2>
      {parts.map(part => <div key={part.id}>{part.name} {part.exercises}</div>)}
      <h4>Total of {totalAmount} exercises</h4>
    </div>
  )
}

export default Course
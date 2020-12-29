import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course'

const App = () => {

  // Kommenteissa on kirjoittamiani muistiinpanoja, eikä tavanomaisia kommentteja
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  console.log(course)

  // Course komponentti saa course nimisen propsin arvoksi olion course
  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App /> , document.getElementById('root'))
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  }
  const part3 = {
    name: "State of a component",
    exercises: 14
  }

  console.log('Tehtävä 1.3 suorituksessa')
  
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercises1={part1} exercises2={part2} exercises3={part3} />
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
 return ( 
  <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
  </div>
 )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part.name} {props.part.exercises} </p>
    </div>
  )
}

const Total = (props) => {
  return (
   <p>Number of exercises {props.exercises1.exercises + props.exercises2.exercises + props.exercises3.exercises}</p>
  )
}

ReactDOM.render(<App /> , document.getElementById('root'))

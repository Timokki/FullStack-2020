import React from 'react'

//Komponentin esittely joka tarvitaan destrukturointi esimerkki ykköseen ja kakkoseen 
//const Course = (props) =>

//const Course = ({name, id, parts}) =>

//const Course = ({name, id, parts}) =>
const Course = (props) =>
{
    console.log('Course props:', props.course.name)
    const {name, id, parts} = props.course
    //Destrukturointi 1.
    //const name = course.name
    //const id = course.id
    //const parts = course.parts

    console.log('Course name:', name)

    //Destrukturointi 2.
    //const {name, id, parts} = props

    //{parts.map(part => {part.name})}
   return (
       <div>
           <h1 key={id}>{name}</h1>
            {parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
       </div>
   )
}

export default Course
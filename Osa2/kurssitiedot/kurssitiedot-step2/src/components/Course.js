import React from 'react'

const Course = (props) =>
{
    const {name, id, parts} = props.course

    const allExercises = parts.map(part => part.exercises)
    let total = 0

    allExercises.forEach(element => {
      total += element  
    });

   return (
       <div>
           <h1 key={id}>{name}</h1>
            {parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
            <p>Total of {total} exercises</p>
       </div>
   )
}

export default Course
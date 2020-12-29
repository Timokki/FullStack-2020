import React from 'react'

const Course = (props) =>
{
    const {name, id, parts} = props.course

    /*let totalAmount = parts.reduce(function(sum, part){
      return sum + part.exercises
    }, 0)*/

    const total = parts.reduce( (sum, part) => {
      console.log('what is happening', sum, part)
      return sum + part.exercises 
    }, 0)

   return (
       <div>
           <h1 key={id}>{name}</h1>
            {parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
            <h4>Total of {total} exercises</h4>
       </div>
   )
}

export default Course
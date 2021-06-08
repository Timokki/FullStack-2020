import React from 'react'

const Button = (props) => {
    return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    )
  }

const ShowPersons = (props) =>
{
    let filteredPersons = props.persons.filter(person => person.name.toLowerCase().includes(props.newFilter.toLowerCase()))

    const deletePerson = person => {
        if (window.confirm("Vahvista " + person.name + "poistaminen."))
        {
            console.log('Delete: ', person.name)
            props.deletePerson(person) //deletePerson funktio sijaitsee index.js tiedostossa.
        }
    }

    console.log('Phone number: ', filteredPersons.map(person => person.number))
    return (
        <>
            {filteredPersons.map(person => <div key={person.name}> {person.name} {person.number} 
            <Button handleClick={() => deletePerson(person)} text="remove" /> </div>)}
        </>
    )

}

export default ShowPersons
import React from 'react'

const ShowPersons = (props) =>
{
    let filteredPersons = props.persons.filter(person => person.name.toLowerCase().includes(props.newFilter.toLowerCase()))

    console.log('Phone number: ', filteredPersons.map(person => person.number))
    return (
        <>
            {filteredPersons.map(person => <div key={person.name}> {person.name} {person.number} </div>)}
        </>
    )
}

export default ShowPersons
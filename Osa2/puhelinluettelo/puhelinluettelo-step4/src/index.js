import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [ persons, setPersons] = useState([
      { name: 'Arto Hellas', number: '040-123456' },
      { name: 'Ada Lovelace', number: '39-44-5323523' },
      { name: 'Dan Abramov', number: '12-43-234345' },
      { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    //console.log(event.target.value)
    setNewFilter(event.target.value)
    console.log('Filtered array: ', filteredPersons)
  }

  const addRecord = (event) => {
    event.preventDefault()
    //console.log('button clicked', event.target)

    if (persons.every(isNameInArray))
    {
      const personObject = {
        name: newName,
        number: newNumber
      }
      //console.log('setPerson name: ', newName)
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
    else 
      window.alert(`${newName} is already added to phonebook`)
  }

  const isNameInArray = (person) => person.name !== newName;

  //console.log('newFilter.toLowerCase: ', newFilter.toLowerCase() )
  let filteredPersons = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter: <input value={newFilter} onChange={handleFilterChange}/>
      </div>
      <h2>Add new</h2>
      <form onSubmit={addRecord}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map(person => <p key={person.name}> {person.name} {person.number} </p>)}
    </div>
  )

}

ReactDOM.render(<App /> , document.getElementById('root'))
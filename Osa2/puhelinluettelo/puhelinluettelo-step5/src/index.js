import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Filter from './components/filter.js'
import ShowPersons from './components/showPersons.js'
import PersonForm from './components/personForm.js'

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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h2>Add new</h2>
      <PersonForm newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} addRecord={addRecord} />
      <h2>Numbers</h2>
      <ShowPersons persons={persons} newFilter={newFilter}/> 
    </div>
  )

}

ReactDOM.render(<App /> , document.getElementById('root'))
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Filter from './components/filter.js'
import ShowPersons from './components/showPersons.js'
import PersonForm from './components/personForm.js'

const App = () => {
  
  const [persons, setPersons] = useState([])
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

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')

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
      //setPersons(notes.persons.concat(personObject))
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
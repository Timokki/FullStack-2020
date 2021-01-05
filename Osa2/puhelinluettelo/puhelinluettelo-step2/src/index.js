import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addRecord = (event) => {
    event.preventDefault()
    //console.log('button clicked', event.target)

    if (persons.every(isNameInArray))
    {
      const personObject = {
        name: newName
      }
      //console.log('setPerson name: ', newName)
      setPersons(persons.concat(personObject))
      setNewName('')
    }
    else 
      window.alert(`${newName} is already added to phonebook`)
  }

  const isNameInArray = (person) => person.name !== newName;

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addRecord}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}> {person.name} </p>)}
    </div>
  )

}

ReactDOM.render(<App /> , document.getElementById('root'))
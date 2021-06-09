import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Filter from './components/filter.js'
import ShowPersons from './components/showPersons.js'
import PersonForm from './components/personForm.js'
import personsService from './services/persons.js'

const App = () => {
  
  //state hookien rekisteröinti komponentin tilojen päivittämiseen.
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  // Kolmella alla olevalla eventHandlerillä päivitetään käyttöliittymää
  // esimerkiksi handleNameChange päivittää komponentin tilan aina kun lomakkeen name kenttään tulee muutos.
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

  const getAllPersons = () => {
    // Haetaan data palvelimelta ja asetetaan se setPerson() hookien avulla.
    personsService.getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }

  /* Siinä vaiheessa kun data saapuu palvelimelta, Javascriptin runtime kutsuu 
  rekisteröityä tapahtumankäsittelijäfunktiota, joka tulostaa konsoliin promise 
  fulfilled sekä tallettaa tilaan palvelimen palauttamat muistiinpanot funktio*/ 
  useEffect(() => {
    console.log('effect')
    getAllPersons()
    
  }, []) // tyhjä taulukko viimeisenä parametrinä määrittää sen, että komponentti päivitetään vain kerran.

  console.log('render', persons.length, 'notes')

  // addRecord kutsutaan kun nappia painetaan.
  const addRecord = (event) => {
    event.preventDefault() // Tällä estetään eventin oletustoiminto
    console.log('button clicked', event.target)

    // 
    if (persons.every(isNameInArray))
    {
      const personObject = {
        name: newName,
        number: newNumber
      } 

      personsService.create(personObject)
        .then(returnedPersons => {
          console.log("personService.post returned person is:", returnedPersons)
          
          // Asetetaan uusi yhteystieto komponentin tilaan vasta kun se on päivitetty palvelimelle.
          console.log('setPerson name: ', newName)
          setPersons(persons.concat(returnedPersons)) //returnedPerson sisältää oikean ID-kentän joten käytetään sitä.

          setNewName('')
          setNewNumber('')
      })
    }
    else //if (persons.find(person => person.name === newName))
    {
      console.log("Phone number update")

      const existingPerson = persons.find(person => person.name === newName)
        
      if (window.confirm("Henkilö " + existingPerson.name + " on jo olemassa. Päivitetäänkö puhelinnumero?"))
        {
          const personObject = {
            name: newName,
            number: newNumber
          } 

          personsService.update(existingPerson.id, personObject).then(() => {
          // Vasta kun tieto on saatu päivitettyä palvelimelle, niin kentät tyhjennetään ja 
          // päivitetty data ladataan palvelimelta.
          setNewName('')
          setNewNumber('')
          getAllPersons()
          })
        }
    }
    /*else 
      window.alert(`${newName} is already added to phonebook`)*/
  }

  /* isNameInArray on viittaus nuolifunktioon, joka saa parametrikseen person objektin.
     Koska parametrejä on vain yksi, ei sulkuja tarvita.
     Funktio sisältää vain yhden lausekkeen, jonka vuoksi ei aaltosulkuja tai return sanaa tarvita.
  */ 
  const isNameInArray = person => person.name !== newName;

  const deletePerson = person => {
    console.log("Index.js deletePerson: ", person.name )

    personsService.deletePerson(person).then(data => {
      console.log('Person deleted', data)
      
      getAllPersons() // Päivitetään App-komponentin persontaulukko vastaamaan palvelimen dataa.
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h2>Add new</h2>
      <PersonForm newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} addRecord={addRecord} />
      <h2>Numbers</h2>
      <ShowPersons persons={persons} newFilter={newFilter} deletePerson={deletePerson}/> 
    </div>
  )

}

ReactDOM.render(<App /> , document.getElementById('root'))
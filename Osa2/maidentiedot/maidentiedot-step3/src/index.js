import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Filter from './components/filter.js'
import ShowCountries from './components/showcountries.js'

const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  // axios.get metodi palauttaa promisen jolla voi olla kolme tilaa.
  // pending, eli odottaa suorituksen aloittamista
  // fullfilled tai resolved, eli suoritus valmis
  // rejected, eli suoritus ei onnistunut.
  // Promisen tilanmuuttumiseen seurantaan tarvitaan siis tapahtumankäsittelijä.
  // se rekisteröidään promiseen then-metodilla.
  /*const promise = axios.get('http://localhost:3001/notes')
  console.log(promise)

  // response sisältää HTTP-GET palautuksen tiedot  
  promise.then(response => {
    console.log(response)
  })

  //promise-oliota ei yleensä tarvita mihinkään ja sen vuoksi tuon kaiken voi ketjuttaa
  axios.get('https://restcountries.eu').then(response => {
  const notes = response.data
  console.log(notes)
})*/

// useEffect metodilla rekisteröidään Effect-hook, joka saa ensimmäiseksi parametrikseen metodin, 
// joka on suoritettava efekti. Toisena parametrinä lopussa on tyhjätaulukko. Se määrittää, että efecti
// suoritetaan vain komponentin ensimmäisen renderöinnin jälkeen.
useEffect(() => {
  console.log('effect')

  const eventHandler = response => {
    console.log('promise fulfilled, data:', response.data)
    setCountries(response.data)
  }

  //
  const promise = axios.get('https://restcountries.eu/rest/v2/all')
  promise.then(eventHandler)
}, [])

  return (
    <div>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <ShowCountries countries={countries} newFilter={newFilter} setNewFilter={setNewFilter}/>
    </div>
  )

}

ReactDOM.render(<App /> , document.getElementById('root'))
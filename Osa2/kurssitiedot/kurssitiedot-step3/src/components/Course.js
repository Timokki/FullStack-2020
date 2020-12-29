import React from 'react'

const Course = (props) =>
{
    const {name, id, parts} = props.course

    // Tässä kommentissa jaan alla olevan lausekkeen osiin oman kertaamiseni vuoksi
    // parts.reduce funktio saa parametrikseen funktion joka saa parametrikseen sum, part
    // sum on muuttuja jota voi käyttää oman tarkoituksen mukaan.
    // part on parts[] taulukon solun sisältö joka vaihtuu kun taulukkoa käydään läpi
    // nuolioperandin jälkeen on (sum, part)-funktion runko jossa lasketaan yhteenlasku
    // nuolifunktion jälkeen asetetaan aloitusarvo 0, jolla viitataan taulukon soluun josta
    // reduce funktion suoritus aloitetaan.
    const totalAmount = parts.reduce((sum, part) => sum + part.exercises, 0)

    // Alla on ylempi reduce-lauseke muutettu pidempään muotoon 
    /*const total = parts.reduce(function(sum, part){
      console.log('what is happening', sum, part)
      return sum + part.exercises 
    }, 0)*/

   return (
       <div>
           <h1 key={id}>{name}</h1>
            {parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
            <h4>Total of {totalAmount} exercises</h4>
       </div>
   )
}

export default Course
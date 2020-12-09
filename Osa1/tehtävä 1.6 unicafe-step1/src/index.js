import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const mainHeader = 'Give feedback'
  // useState metodilla luodaan komponentille tila. 
  // good pitää sisällään tilan, setGood on viittaus funktioon jolla arvoa muutetaan jne.
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  console.log('Tehtävä 1.6 Unicafe-step1 suorituksessa')

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  return (
    <div>
      <Header headerProp={mainHeader} />
      <button onClick={handleBadClick}> Bad</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleGoodClick}>Good</button>
      <Header headerProp='statistics' />
      <Stat text='good' value={good} />
      <Stat text='neutral' value={neutral} />
      <Stat text='bad' value={bad}/>
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.headerProp}</h1>
}

const Stat = (props) => {
  return (
      <p>{props.text} {props.value}</p>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const mainHeader = 'Give feedback'
  // useState metodilla luodaan komponentille tila. 
  // good pitää sisällään tilan, setGood on viittaus funktioon jolla arvoa muutetaan jne.
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  console.log('Tehtävä 1.8 Unicafe-step3 suorituksessa')

  const handleNeutralClick = () => {
      setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  //onClick saa viittauksen metodiin. handleBadClick on siis viittaus metodiin eikä metodi itsessään 
  return (
    <div>
      <Header headerProp={mainHeader} />
      <Button handleClick={handleBadClick} text='Bad' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleGoodClick} text='Good' />
      <Header headerProp='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

// Buttoneista on nyt tehty komponentti harjoitusmielessä.
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Header = (props) => {
  return <h1>{props.headerProp}</h1>
}

const Statistics = (props) =>{
  let total = props.good + props.neutral + props.bad

  return (
    <div>
      <p>good {props.good} <br/>
      neutral {props.neutral} <br/>
      bad {props.bad} <br/>
      all {total} <br/>
      average {(props.good - props.bad) / total} <br/>
      positive {props.good / total} %</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
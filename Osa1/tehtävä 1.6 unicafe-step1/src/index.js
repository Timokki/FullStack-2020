import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const mainHeader = 'Give feedback'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  console.log('Tehtävä 1.6 Unicafe-step1 suorituksessa')

  return (
    <div>
      <Header headerProp={mainHeader} />
      <button onClick={() => setValue(0)}>Bad</button>
      <button onClick={() => setValue(0)}>Neutral</button>
      <button onClick={() => setValue(0)}>Good</button>
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.headerProp}</h1>
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
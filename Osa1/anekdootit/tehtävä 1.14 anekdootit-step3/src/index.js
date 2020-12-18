import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(new Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(-1)

  const handleClick = () => {
    setSelected(Math.floor((Math.random()*anecdotes.length)))
    return <div><p>anecdotes[{selected}]</p></div>
  }

  const handleClickVote = () => {
    votes[selected] += 1
    setVote(votes.slice()) //Päivitys ei toimi jos setVote saa parametriksi uutta taulukkoa.
    console.log('Äänestetty votes[', selected, ']:' , votes[selected])
    setMostVotedAnecdote() 
  }

  const setMostVotedAnecdote = () =>
{
  console.log('senMostVotedAnectode funktiossa')
  let isVoted = mostVoted
  for(let i=0; votes.length > i; i++) {
    console.log('for-silmukka votes[i]:', votes[i], ' votes[mostVoted]:', votes[mostVoted], 'votes.length:', votes.length)
    if (isVoted ===-1 || votes[i] > votes[mostVoted])
    {
      isVoted = 1
      console.log('setMostVoted ', i) 
      setMostVoted(i)
    }
  }
}

  return (
    <div>
      {console.log('App updated')}
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}<br/>
      has {votes[selected]} votes <br/>
      <button onClick={handleClickVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <ShowMostVotedAnecdote anecdotes={props.anecdotes} mostVotedIndex={mostVoted} votes={votes}> </ShowMostVotedAnecdote>
    </div>
  )
}

const ShowMostVotedAnecdote = (props) => {
  console.log('ShowMOstVotedAnecdote mostVotedIndex: ', props.mostVotedIndex)
  if (props.mostVotedIndex < 0)
  {
    return ''
  }
  return(
    <>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[props.mostVotedIndex]}<br/>
      has {props.votes[props.mostVotedIndex]} votes.
      </p>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
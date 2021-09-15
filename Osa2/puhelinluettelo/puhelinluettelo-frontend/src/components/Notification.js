import React from 'react'

const Notification = ({ message, isError}) => {

    // Inline tyylimäärittely jotta komponentti olisi 
    const errorStyle = {
        background: 'lightgrey',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        color: 'red',
        fontStyle: 'italic',
        fontSize: 20
      }

      const infoStyle = {
        background: 'lightgrey',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        color: 'green',
        fontStyle: 'italic',
        fontSize: 20
      }

    if (message === null) {
      return null
    }

    return (
    <div style={isError ?  errorStyle :  infoStyle} >
        {message}
    </div>
    )
  }

export default Notification
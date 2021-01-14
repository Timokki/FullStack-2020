import React from 'react'

const Showcountries = (props) =>
{
    console.log('Showcountries: ', props.countries)

    return (
        <div>
            <p>Tässä näytetään maiden tietoja</p>
        </div>
    )
}

export default Showcountries
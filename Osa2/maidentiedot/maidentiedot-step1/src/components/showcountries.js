import React from 'react'

const Showcountries = (props) =>
{
    console.log('Showcountries: ', props.countries)

    let filteredCountries = props.countries.filter(country => country.name.toLowerCase().includes(props.newFilter.toLowerCase()))
    //let filteredCountries = props.countries.filter(country => country.name.includes(props.newFilter))

    if (filteredCountries.length > 10)
    {
        return <div>Too many matches, specify another filter.</div>
    }
    else if (filteredCountries.length > 1)
    {
        return (
            <>
            {filteredCountries.map(country => <div key={country.alpha3Code}> {country.name} </div>)}
            </>
        )
    }

    return(
        <>
        {filteredCountries.map(country => <div key={country.alpha3Code}> {country.name} </div>)}
        </>
    )
    
    
}

export default Showcountries
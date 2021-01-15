import React from 'react'

const Showcountries = (props) =>
{
    console.log('Showcountries: ', props.countries)

    let filteredCountries = props.countries.filter(country => country.name.toLowerCase().includes(props.newFilter.toLowerCase()))

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

    let selectedCountry = filteredCountries[0]

    if (selectedCountry != null)
    {
        return(
            <>
            <h1>{selectedCountry.name}</h1>
            <div>{selectedCountry.capital}</div>
            <div>Population: {selectedCountry.population}</div>
            <h2>Languages</h2>
            <ul>
                {selectedCountry.languages.map(language => <li key={language.name}> {language.name} </li>)}
            </ul>
                <img src={selectedCountry.flag} alt="Flag of country" width="15%" height="10%"></img>
            </>
        )
    }

    return ''
    
}

export default Showcountries
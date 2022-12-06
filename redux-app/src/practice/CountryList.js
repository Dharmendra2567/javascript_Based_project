import React, { useEffect, useState } from 'react'
import DisplayCountry from './DisplayCountry'

const CountryList = () => {
    const [country,setCountry] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(Response=>Response.json())
        .then(data=>setCountry(data))
    },[])
  return (
    <>
    {
      country &&
        country.map(item=>{
            return <select>
              <option><DisplayCountry country={item}/></option>
            </select>
        })
    }
    </>
  )
}

export default CountryList
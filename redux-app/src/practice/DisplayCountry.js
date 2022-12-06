import React from 'react'

const DisplayCountry = ({country}) => {
  return (
    <>
    {/* <h2>coutry dropdown</h2>
   Country:{countries.name} */}
   {country.name.common}<br/>
   
    </>
  )
}

export default DisplayCountry
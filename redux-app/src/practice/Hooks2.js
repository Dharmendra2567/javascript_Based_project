import React, { useEffect, useState } from 'react'

const Hooks2 = () => {
    
    let [count,setCount] = useState(100)
    const increment=() =>{
        setCount(++count)
       
    }
    const decrement =() =>{
        setCount(--count)
    }
    useEffect(()=>{
        window.alert("updated")
    },[count])
  return (
   
    <>
    Count:{count}
    {
         count < 110 &&
         <button className='btn btn-warning' onClick={increment} >increase</button>
         
    }
    {
        count >100 &&
        <button className='btn btn-warning' onClick={decrement} >decrease</button>

    }
   </>
  )
}

export default Hooks2
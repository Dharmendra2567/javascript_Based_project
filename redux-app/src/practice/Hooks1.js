import React from 'react'

const Hooks1 = () => {
   
   function increment(){
    let count=100;
    for(let i=0;i<10;i++){
       
        document.getElementById("test").innerHTML=count+i
        

    }
   
   
    
    
    }
  return (
    <>
    <h1 id="test"></h1>
   <button className='btn btn-warning' onClick={increment}>Update</button>
  
    </>
  )
}

export default Hooks1
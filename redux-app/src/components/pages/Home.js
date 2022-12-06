import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'
import Navbar from '../layout/Navbar'

const Home = () => {
    const item_store = useSelector(store=>store.itemStore)
    const items = item_store.items
  return (
    <>
    
    <Navbar/>
    <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 g-40'>

        {items &&
        items.map(item => {
            return <Card item={item}/>
        })} 
    </div>
    </>
  )
}

export default Home
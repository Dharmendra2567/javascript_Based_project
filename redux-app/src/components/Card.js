import React from 'react'
import { useDispatch } from 'react-redux'

const Card = ({item}) => {
    const dispatch = useDispatch()
  return (
    <>
         <div className="col">
    <div className="card">
      <img src={`${item.item_image}`} className="card-img-top" alt="" style={{height:'300px'}}/>
      <div className="card-body">
        <h5 className="card-title text-truncate">{item.item_name}</h5>
        <p className="card-text">{item.item_price}</p>
        <button className="btn btn-warning" onClick={()=>dispatch({type:'ADD_TO_CART',payload:item})}>
            Add to Cart</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Card
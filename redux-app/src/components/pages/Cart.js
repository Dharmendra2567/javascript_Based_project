import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../layout/Navbar'

const Cart = () => {
    const cart_store = useSelector(store => store.cartStore)
    const cartItems = cart_store.cartitems
    const dispatch = useDispatch()

    return (
        <>
            <Navbar />
            <h1 className='text-center text-decoration-underline mt-3 mb-2'>Cart items</h1>
            <div className='container'>
                {
                    cartItems.length > 0 ?


                        <table className='table table-bordered shadow-lg text-center table-hover'>
                            <thead>

                                <tr>
                                    <th>S.No</th>
                                    <th>product Image</th>
                                    <th>Product description</th>
                                    <th>Action</th>
                                </tr>

                            </thead>
                            <tbody>

                                {
                                    cartItems &&
                                    cartItems.map((item, i) => {

                                        return (
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>
                                                    <img src={item.item_image} alt={item.image_name} style={{ height: '100px' }} />
                                                </td>
                                                <td>
                                                    <h5>{item.item_name}</h5>
                                                    <h6>{item.item_price}</h6>
                                                </td>
                                                <td>
                                                    <button className='btn btn-warning' onClick={() => {
                                                        return dispatch({ type: 'REMOVE_FROM_CART', payload: item })
                                                    }}>Remove</button>
                                                </td>
                                            </tr>
                                        )

                                    })
                                }
                                <tr >
                                    <td colspan={4}>
                                        <button className='btn btn-warning' onClick={() => {
                                            return dispatch({ type: 'CLEAR_CART' })
                                        }}>Clear Cart</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        :
                        <h2 className='text-center'>No items in Cart</h2>

                }

            </div>

        </>
    )
}

export default Cart
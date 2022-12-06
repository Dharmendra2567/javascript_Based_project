import React from 'react'
import Footer from './layouts/Footer'
import Navbar from './layouts/Navbar'

const Cart = () => {
  return (
   <>
   <Navbar/>
<div className='container p-5'>
    <h4 className='text-center'>Cart Item</h4>
    <table className='table text-center table-bordered table-hover align-middle'>
        <thead>
            <tr>
                <th>S.N</th>
                <th>Product Image</th>
                <th>Product Information</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>
                    <img src='./logo192.png' alt=' ' style={{height:'100px'}}/>
                </td>
                <td>
                    <h5>Product Name</h5>
                    <h6>Price</h6>
                </td>
                <td>
                    <div className='btn-group'>
                        <button className='btn btn-warning'><i className="bi bi-pencil"/>Edit</button>
                        <button className='btn btn-danger'><i className="bi bi-trash"/>Remove</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>


   <Footer/>
   </>
  )
}

export default Cart
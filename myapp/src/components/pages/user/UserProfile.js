import React from 'react'
import { isAuthenticated } from '../../../api/userApi'
import Footer from '../../layouts/Footer'
import Navbar from '../../layouts/Navbar'
import UserSidebar from './UserSidebar'

const UserProfile = () => {
    const {user} = isAuthenticated()
  return (
    <>
    <Navbar/>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-3'>
            <UserSidebar/>
            </div>
            <div className='col-md-9 p-5'>
             <h3>welcome {user.username}</h3>
            </div>
        </div>
     </div>
   
   
    <Footer/>
    </>
  )
}

export default UserProfile
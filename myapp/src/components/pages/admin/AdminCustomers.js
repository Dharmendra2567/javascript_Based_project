import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../../../api/productApi'
import { getUserDetails, isAuthenticated } from '../../../api/userApi'
import Footer from '../../layouts/Footer'
import Navbar from '../../layouts/Navbar'
import AdminSidebar from './AdminSidebar'

const AdminCustomers = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState('')
    const [success, setSuccess] = useState([])
    const { id, token } = isAuthenticated()

    useEffect(() => {
        getAllUsers()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setUsers(data)
                }
            })
    }, [success])

    const handleRole = e => {
        e.preventDefault()
        getUserDetails(id, token)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                console.log(data)
            }
            )

    }
    return (
        <>
            <Navbar />
            {/* {showError()}
    {showSuccess()} */}
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminSidebar />
                    </div>
                    <div className='col-md-9 p-5'>
                        <h3>Customers</h3>
                        <table className='table table-bordered table-hover align-middle text-center'>
                            <thead>
                                <tr className='table-dark'>
                                    <th>S.N</th>
                                    <th>User Name</th>
                                    <th>user Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, i) => {
                                    return <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <div className='btn-group m-2'>
                                                {user && user.role === 0 &&
                                                    <button className='btn btn-warning' onClick={handleRole}>Make Admin</button>
                                                }
                                                {user && user.role === 1 &&
                                                    <button className='btn btn-warning' onClick={handleRole}>Make User</button>
                                                }
                                                <button className="btn btn-success ms-2">Enable</button>
                                                <button className='btn btn-danger ms-2' >Disable</button>
                                            </div>
                                        </td>
                                    </tr>
                                })}
                                <tr>
                                    <td colSpan={6}>
                                        <button className='btn btn-primary'>Load More</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminCustomers
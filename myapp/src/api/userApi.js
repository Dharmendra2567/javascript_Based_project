import { useParams } from "react-router-dom"
import { API } from "../config"

export const register =(user)=>{
    return fetch(`${API}/register`,{
        method:"POST",
        headers:{
           "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        return console.log(err)
    })
}
export const confirmEmail= token=>{
   
    return fetch(`${API}/confirm/${token}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const login =user=>{
    return fetch(`${API}/signin`,{
        method:"POST",
        headers:{
           "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        return console.log(err)
    })
}
export const authenticte = (data)=>{
    localStorage.setItem('jwt',JSON.stringify(data))
}
 export const isAuthenticated = ()=>{
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    }
    else{
        return false
    }
 }
 export const signOut = ()=>{
    localStorage.removeItem('jwt')
 }
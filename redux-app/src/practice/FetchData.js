import React, { useEffect, useState } from 'react'
import DisplayPosts from './DisplayPosts'

const FetchData = () => {
    let [posts,setPosts] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(Response=>{
            console.log(Response)
            return Response.json()
        })
        .then(data=>{
            console.log(data)
            return setPosts(data)
        })
        .catch(error=>console.log(error))
    },[])
  return (
    <>
    {
        posts.map(item=>{
            return <DisplayPosts post={item}/>
        })
    }
    </>
  )
}

export default FetchData
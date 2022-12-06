import React from 'react'

const DisplayPosts = ({post}) => {
  return (
    <>
    <div className='card'>
        <h1>{post.id} {post.title}</h1>
        <hr/>
        <p>{post.body}</p>
    </div>
    </>
  )
}

export default DisplayPosts
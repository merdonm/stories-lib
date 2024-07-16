import React from 'react'
import Post from './Post'

const Feed = ({ post }) => {
  return (
    <div className='grid grid-cols-4 px-10 gap-10 '>
        {post.map((data=>(
            <Post key={data.id} posts={data} />
        )))}
    </div>
  )
}

export default Feed
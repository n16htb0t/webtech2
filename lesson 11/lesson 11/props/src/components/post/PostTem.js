import React from 'react'
import { ParentPost } from './PostStyle'
function PostTem({title, description}) {
  return (
    <div>
         <ParentPost className='post'>
                <h2>{title}</h2>
                <p>{description}</p>
            </ParentPost>
    </div>
  )
}

export default PostTem
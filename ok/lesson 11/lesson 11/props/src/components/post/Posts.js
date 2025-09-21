import React from 'react'
import PostTem from './PostTem'
import { PostObj,UserObj  } from '../data'
import './Posts.css'
import {Flex} from './PostStyle'
function Posts() {

  return (
    <div>
        <h1>Posts</h1>
        <Flex>
           
           {
            PostObj.map((value)=>{
                return(
             <PostTem key={value.id} title={value.title} description={value.desc} />
                )
            })
           }
         
          
             
        </Flex>
    </div>
  )
}

export default Posts
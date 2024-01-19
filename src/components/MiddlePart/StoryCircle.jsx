import { Avatar } from '@mui/material'
import React from 'react'

const StoryCircle = () => {
  return (
    <div>
      <div className='flex flex-col items-center mr-4 cursor-pointer'>
          <Avatar sx={{width:"5rem", height:"5rem"}}
          src="https://cdn.pixabay.com/photo/2016/12/19/21/36/woman-1919143_1280.jpg"
          >
          </Avatar>
          <p>usernam...</p>
        </div>
    </div>
  )
}

export default StoryCircle

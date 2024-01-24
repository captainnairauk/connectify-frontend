import { Avatar, Grid, IconButton } from '@mui/material'
import React from 'react'
import WestIcon from '@mui/icons-material/West';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Message = () => {
  const handleSelectImage = () => {
    console.log("handle select image...");
  }
  return (
    <div>
      <Grid container className='h-screen overflow-y-hidden'>
        <Grid className='px-5' item xs={3}>
          <div className='flex h-full justify-between space-x-2'>
            <div className='w-full'>
            <div className='flex space-x-4 items-center py-5'>
              <WestIcon/>
              <h1 className='text-xl font-bold'>Home</h1>
            </div>
            <div className='h-[83vh]'>
              <div className=''>
                searchUser
              </div>
              <div className='h-full space-y-4 mt-5 overflow-y-scroll hideScrollbar'>
                UserChatCard
              </div>
            </div>
            </div>
          </div>
        </Grid>
        <Grid className='h-full' item xs={9}>
          <div>
            <div className='flex justify-between items-center border-l p-5'>
              <div className='flex items-center space-x-3'>
                <Avatar src='https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                <p>User name</p>
              </div>

              <div className='flex space-x-3'>
                <IconButton>
                  <AddIcCallIcon/>
                </IconButton>
                <IconButton>
                  <VideoCallIcon/>
                </IconButton>
              </div>
            </div>

            <div className='hideScrollBar overflow-y-scroll h-[82vh] px-2 space-y-5 py-5'>
              message
            </div>
          </div>
          <div className='sticky bottom-0 border-1'>
            <div className='py-5 flex items-center justify-center space-x-5'>
              <input className="bg-transparent border border-[#3b40544] rounded-full w-[90%] py-3 px-5" placeholder='type message...' type="text" />
            </div>
            <div>
              <input type="file" accept='image/*' onChange={handleSelectImage} className='hidden' id='image-input' />
              <label htmlFor="image-input">
                <AddPhotoAlternateIcon/>
              </label>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Message

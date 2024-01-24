import { Avatar, Card, CardHeader } from '@mui/material';
import React from 'react'

const SearchUser = () => {
  const handleSearchUser = () => {
    console.log("search user....");
  }
  const handleClick = (id) => {
    console.log(id);
  }
  return (
    <div>
      <div className='py-5 relative'>
        <input className='bg-transparent border border-[#3b4054] outline-none w-full px-5 py-3 rounded-full' placeholder='search user...' onChange={handleSearchUser} type="text" />
      </div>

      {
        false && <Card>
          <CardHeader onClick={() => {
            handleClick()
          }}
          avatar={<Avatar src='https://images.pexels.com/photos/4417069/pexels-photo-4417069.jpeg?auto=compress&cs=tinysrgb&w=400'/>} title="User name"
          subheader={"username"}
          />
        </Card>
      }
    </div>
  )
}

export default SearchUser

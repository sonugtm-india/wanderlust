
import React, { useState } from 'react'
import {Box,Typography,Menu,MenuItem,styled} from '@mui/material'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import axios from 'axios'
const Component=styled(Menu)`
     margin-top:5px;
     
`
const Logout=styled('Typography')`
margin-left:14px;
     font-size:14px;
     
`
const Profile = ({accountName,setAccountName}) => {
    const [open,setOpen]=useState(false)
    const handleClick=(event)=>{
        setOpen(event.currentTarget);
    }
    const handleClose=()=>{
        setOpen(false)
    }
    const handleLogout = async () => {
  
      const api ="http://localhost:8000"
      try {
          await axios.get(`${api}/logout`); // Sending a GET request to the logout endpoint
          // Optionally, you can perform any additional actions after successful logout
          console.log('Logged out successfully');
      } catch (error) {
          console.error('Logout failed', error);
      }
      setAccountName('');
  };
    
  return (
    <>
    <Box onClick={(e)=>{handleClick(e)}} style={{cursor:'pointer'}}>
        <Typography  style={{marginTop:2}}>{accountName}</Typography>
        </Box>
        <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{handleClose(); handleLogout()} }>
        <PowerSettingsNewIcon color='primary' fontSize='small'/>
        <Logout> Logout</Logout>
        </MenuItem>
      </Component>
   
    </>
  )
}

export default Profile
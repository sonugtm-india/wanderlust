import React, { useState,useContext } from 'react'
import { Button, Box, Typography, styled} from '@mui/material'
import AddHomeIcon from '@mui/icons-material/AddHome';
import { DataContext } from '../../contextAPI/DataProvider';
import {Link} from "react-router-dom"

// import LoginCompoent
 import LoginDialoge from '../login/LoginDialoge';
import Profile from './Profile';

const Container=styled(Box)`
display:flex;
merge:0 3% 0 auto;
& > button, &>p, &>div
{
    margin-right:40px;
    font-size:14px;
    
}
`
const Wrapper=styled(Box)`
 display:flex;
`
const LoginButton=styled(Button)`
    color:#2874f0;
    background-color:#FFFFFF;
    text-transform: none;
    padding:5px;
    box-shadow:none;
    border-radius:2px;
    font-weight:600;
    margin-left:40px;
    height:35px;
`


const CustomButton = () => {
    const [open,setOpen]=useState(false)
    const {accountName,setAccountName}=useContext(DataContext);
   
    const openDialog=()=>{
        setOpen(true)
    }
  return (
   <Container>
    {  accountName ? <Box style={{marginLeft:40}}><Profile accountName={accountName} setAccountName={setAccountName}/>  </Box>:
      <LoginButton variant="container" onClick={openDialog} style={{minWidth:100}}> Login</LoginButton>
}
    <Link to = {"/seller"} ><Typography style={{maginTop: 10}}> Become a Seller</Typography></Link>
   
    <Wrapper>
    <AddHomeIcon style={{marginLeft:100}}/>
       <Link to = {'/listing'}> 
        <Typography > Add Listing</Typography></Link>
    </Wrapper>
   <LoginDialoge open={open} setOpen={setOpen}/>
   </Container>
  )
}

export default CustomButton
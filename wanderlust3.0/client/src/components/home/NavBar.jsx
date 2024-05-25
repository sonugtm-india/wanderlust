import React from 'react'
import {Box,Container,Typography,styled} from '@mui/material'
import {navData} from '../../constants/data.js'

const Component=styled(Box)`
   display:flex;
   margin:55px 160px 0 130px;
   justify-content: space-between;

`;
const StyledContainer=styled(Box)`
    padding:20px 8px;
    text-align:center;
    color:grey;



`
const Text=styled(Typography)`
  font-size:14px;
  font-weight:500;
  font-family:inherit;
`
const NavBar = () => {
  return (
    <Component>{
        navData.map((data,index)=>(
             <StyledContainer key={index}>
                <img src={data.url} alt='navBar'style={{width:20}}/>
                <Text>{data.text}</Text>
             </StyledContainer>
              
        ))
    }
   </Component>
  )
}

export default NavBar
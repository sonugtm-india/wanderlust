import React from 'react'
import {AppBar,Toolbar,styled,Box, Typography} from "@mui/material"
import Search from './Search'
import CustomButton from './CustomButton'
import HomeIcon from '@mui/icons-material/Home';
import {Link} from "react-router-dom"


const StyledHeader=styled(AppBar)`
background-color: #2874f0;
height:70px;
`
const Component=styled(Link)`
   margin-left:2%;
   line-height:0;
   margin-top:0.5%;
  
   text-decoration:none;
   color:inherit;
`
const SubHeading=styled(Typography)`
font-size:10px;
font-style:italic;



`
const PlusImage=styled('img')({
  width:10,
  height:10,
  marginLeft:4


})

const Header = () => {

  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <StyledHeader>
      <Toolbar style={{minHeight:58}}>
        <Component to ="/">
        <HomeIcon style={{width:40, height:40,marginBottom:5}}/>
        <span style={{fontWeight:800, fontSize:25 }}> WanderLust</span>
         <Box style={{display:'flex'}}>
          <SubHeading>Explore&nbsp; 
          <Box component="span" style={{color:'#FFE500'}}>Plus </Box>
            </SubHeading>
              <PlusImage src={subURL} alt="subHeadinglogo"/>
         </Box>
         </Component>
         <Search/>
       <Box>
        <CustomButton/>
        </Box>  
        </Toolbar>
    </StyledHeader>

   
  )
}

export default Header
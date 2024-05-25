

import React from 'react'
import {Box,styled, Grid} from '@mui/material'
import { imageURL} from '../../constants/data' 

const Wrapper=styled(Grid)`
 margin-top:10px;
`
const MiddleBanner = () => {
  return (
   <Wrapper lg={12} md={12} xs={12} container>
   { imageURL.map((items)=>(
     <Grid item lg={4} md={4} sm={12} xm={12}>
      <img src={items} alt="ad" style={{width:'100%'}}/>
      </Grid>)

   )

   }
   </Wrapper>
  )
}

export default MiddleBanner
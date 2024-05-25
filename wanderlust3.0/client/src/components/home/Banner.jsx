import React from 'react'
import Carousel from 'react-multi-carousel';
import { bannerData } from '../../constants/data';
import 'react-multi-carousel/lib/styles.css';
import {styled} from '@mui/material'


const Image=styled('img')({
    width:'100%',
    height:400
})
const responsive ={
superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Banner = () => {
  return (
    <Carousel responsive={responsive} 
    swipeable={false}
    draggable={false}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={3000}
    keyBoardControl={true}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    >
        {
        bannerData.map((data,index)=>(
        <Image src={data.url} alt ="banner"/>
        ))
        }
    </Carousel>
  )
}

export default Banner
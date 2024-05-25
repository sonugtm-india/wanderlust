import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const UserListing = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get('http://localhost:8000/listings');
        console.log('Listings response:', response.data); // Log the response data to see its structure
        setListings(response.data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, []);

  console.log('Listings:', listings); // Log the listings state to see its contents

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <h1>Listings</h1>
      <Slider {...sliderSettings}>
        {listings.map(listing => (
          <div key={listing._id}>
            <h2>{listing.title}</h2>
            <p>{listing.description}</p>
            {listing.image && ( // Check if listing has image data
              <img src={`http://localhost:8000/${listing.image.filename}`} alt={listing.title} />
            )}
            <p>Price: {listing.price}</p>
            <p>Location: {listing.location}</p>
            <p>Country: {listing.country}</p>
            {/* Render additional properties as needed */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UserListing;

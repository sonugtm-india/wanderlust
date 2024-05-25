import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsDetails } from '../redux/actions/productAction';
import { Box, Typography, Button, TextField } from '@mui/material';
import styled from '@emotion/styled';
import mapboxgl from 'mapbox-gl';

// Star Rating Component
const StarRating = ({ value, onChange }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((starValue) => (
        <span
          key={starValue}
          onClick={() => onChange(starValue)}
          style={{ cursor: 'pointer', color: starValue <= value ? 'gold' : 'grey' }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
`;

const Header = styled.header`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const LeftContainer = styled(Box)`
  width: 60%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled(Box)`
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
`;

const Image = styled('img')`
  width: 100%;
  height: auto;
`;

const TitleContainer = styled(Box)`
  font-weight: 600;
  margin-top: 20px;
`;

const RequestContainer = styled(Box)`
  margin-top: 20px;
`;

const UserSection = styled(Box)`
  width: 35%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const ReviewSection = styled(Box)`
  margin-top: 20px;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f2f2f2;
  border-radius: 8px;
`;

const defaultCenter = [-91.04223379456913, 14.204853806811546];

export const DetailViewData = () => {
  const dispatch = useDispatch();
  const { loading, product } = useSelector(state => state.getProductDetails);
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (!product || id !== product.id) {
      dispatch(getProductsDetails(id));
    }
    // Fetch dummy user information and reviews
    fetchDummyData().then(data => setUserData(data));
  }, [dispatch, id, product]);

  const handleReviewSubmit = () => {
    // Implement your logic to submit the review
    console.log('Submitting review:', { rating, reviewText });
    // You can dispatch an action here to submit the review to the server
  };

  return (
    <PageContainer>
      <Content>
        <LeftContainer>
          {product && (
            <>
              <ImageContainer>
                <Image src={product.image && product.image.url} alt={product.name} />
              </ImageContainer>
              <TitleContainer>
                <Typography variant="h4">{product.title}</Typography>
                <Typography variant="h5" style={{ color: "green" }}>Rs. {product.price}</Typography>
              </TitleContainer>
            </>
          )}
          <RequestContainer>
            <Button variant="contained" color="primary">Request</Button>
          </RequestContainer>
          <ReviewSection>
            <Typography variant="h6">Add Review</Typography>
            <StarRating value={rating} onChange={setRating} />
            <TextField
              label="Your Review"
              variant="outlined"
              multiline
              rows={4}
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleReviewSubmit} style={{marginBottom:50}}>
              Post
            </Button>
          </ReviewSection>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1177510.0267590901!2d-91.04223379456913!3d14.204853806811546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a0ef4ea123d5%3A0x2d0948b9e824701!2sGuatemala%20City%20Metropolitan%20Area%2C%20Guatemala!5e0!3m2!1sen!2sin!4v1715783000714!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapContainer>
        </LeftContainer>
        <UserSection>
          {/* Add user information here */}
          <Typography variant="h5">User Information</Typography>
          {userData && (
            <>
              <Typography>Name: {userData.userInfo.name}</Typography>
              <Typography>Email: {userData.userInfo.email}</Typography>
              <Typography>Location: {userData.userInfo.location}</Typography>
              {/* Include review section within user information */}
              <ReviewSection>
                <Typography variant="h6">Reviews</Typography>
                {userData.reviews.map(review => (
                  <div key={review.id}>
                    <Typography>{review.text}</Typography>
                    <Typography>Rating: {review.rating}</Typography>
                  </div>
                ))}
              </ReviewSection>
            </>
          )}
        </UserSection>
      </Content>
    </PageContainer>
  );
};

// Dummy function to fetch user information and reviews
const fetchDummyData = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
  return {
    userInfo: {
      name: 'John Doe',
      email: 'john@example.com',
      location: 'New York, USA',
    },
    reviews: [
      { id: 1, text: 'Great product!', rating: 5 },
      { id: 2, text: 'Nice!', rating: 4 },
      { id: 3, text: 'Could be better', rating: 3 },
    ],
  };
};

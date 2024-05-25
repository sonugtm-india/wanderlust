import React from 'react';
import PropTypes from 'prop-types';
import { Box, styled, Button, Divider, Grid, Typography } from '@mui/material';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

const Container = styled(Box)({
  marginTop: 10,
  backgroundColor: '#ffffff',
});

const DealContainer = styled(Box)({
  padding: '15px 20px',
  display: 'flex',
  alignItems: 'center',
});

const TimerContainer = styled(Box)({
  display: 'flex',
  marginLeft: 20,
  alignItems: 'center',
});

const DealText = styled(Typography)({
  fontSize: '24px',
  fontWeight: 600,
  marginLeft: 25,
  lineHeight: '32px',
});

const ViewAllButton = styled(Button)({
  marginLeft: 'auto',
  backgroundColor: '#2874f0',
  fontWeight: 600,
  fontSize: 14,
});

const Image = styled('img')({
  width: '100%',
  height: 300,
  borderRadius: 10,
});

const Text = styled(Typography)({
  fontSize: 14,
  marginTop: 5,
});

const SlidingDeals = ({ products, title, timer }) => {
  const renderer = ({ hours, minutes, seconds }) => {
    return <Box component="span">{hours}:{minutes}:{seconds}</Box>;
  };

  return (
    <Container>
      <DealContainer>
        <DealText>{title}</DealText>
        {timer && (
          <TimerContainer>
            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg" alt="timer" style={{ width: 24 }} />
            <Countdown date={Date.now() + 3.6e+7} renderer={renderer} />
          </TimerContainer>
        )}
        <ViewAllButton variant="contained">View All</ViewAllButton>
      </DealContainer>
      <Divider />
      <Grid container spacing={2} style={{padding:20}}>
        {products.map(item => (
          <Grid key={item.id} item lg={4} md={4} sm={6} xs={12}>
            <Link to={`product/${item.id}`} style={{ textDecoration: 'none' }}>
              <Image src={item.image.url} alt="product"/>
              <Text style={{ color: 'black', fontWeight: 600 }}>{item.title}</Text>
              <Text style={{ color: 'green', fontWeight: 600 }}>{item.price}</Text>
              <Text>{item.tagline}</Text>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

SlidingDeals.propTypes = {
  products: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  timer: PropTypes.bool,
};

export default SlidingDeals;

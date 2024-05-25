import React from 'react';
import { Container, Typography, Link, Grid, IconButton, Box } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const WanderlustFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'light-grey',
        color: 'text.primary',
        py: 4,
        boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={4} sx={{ mb: { xs: 2, sm: 0 } }}>
            <Typography variant="h5" component="div" align="center">
              Wanderlust
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2" align="center">
              <Link href="#" color="inherit">About us</Link>
              {' | '}
              <Link href="#" color="inherit">Contact</Link>
              {' | '}
              <Link href="#" color="inherit">Terms of Service</Link>
              {' | '}
              <Link href="#" color="inherit">Privacy Policy</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2" align="center">
              Follow us:
              {' '}
              <IconButton href="#"><Facebook /></IconButton>
              <IconButton href="#"><Twitter /></IconButton>
              <IconButton href="#"><Instagram /></IconButton>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default WanderlustFooter;

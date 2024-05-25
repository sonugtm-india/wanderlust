import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Card, CardMedia } from '@mui/material';

const ListingForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    location: '',
    country: '',
    image: null,
    imageUrl: '', // To display the uploaded image
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setFormData({ ...formData, image: file, imageUrl });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = 'http://localhost:8000';

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('country', formData.country);
      formDataToSend.append('image', formData.image);

      const response = await fetch(`${api}/upload`, {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to submit listing');
      }

      console.log('Listing submitted successfully');
    } catch (error) {
      console.error('Error submitting listing:', error.message);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{ paddingTop: 50 }}>
        Enter Your Listing
      </Typography>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              multiline
              rows={4}
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      {formData.imageUrl && (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={formData.imageUrl}
                alt="Uploaded Image"
              />
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default ListingForm;

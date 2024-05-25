import mongoose from "mongoose";

const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    data: Buffer, // Store binary image data directly
    contentType: String, // Store image content type (e.g., 'image/jpeg')
    filename: String, // Store the filename if needed
  },
  price: Number,
  location: String,
  country: String,
  reviews:[
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    }
  ],
  owner:{
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Listing = mongoose.model('Listing', listingSchema);

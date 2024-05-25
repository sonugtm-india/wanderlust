import Products from "../model/products_schema.js";
import { Listing } from "../model/listing-schema.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Products.findOne({ id: id });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const userListing = async (req, res) => {
  const { title, price, description } = req.body;
  const image = req.file;

  try {
    // Check if similar listing already exists
    const existingListing = await Listing.findOne({ title: title });

    if (existingListing) {
      return res.status(400).json({ error: 'Listing already exists.' });
    }

    const newListing = new Listing({
      title,
      price,
      description,
      image: {
        data: image.buffer,
        contentType: image.mimetype,
        filename: image.originalname,
      },
    });

    await newListing.save();

    res.status(200).json({ message: 'Listing submitted successfully.' });
  } catch (error) {
    console.error('Error submitting listing:', error.message);
    res.status(500).json({ error: 'Failed to submit listing.' });
  }
};

export const getUserListing = async (req, res) => {
  try {
    const listings = await Listing.find({});
    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json(error);
  }
};

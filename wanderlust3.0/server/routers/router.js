// router.js

import express from 'express';
import { userSignup, userLogin, logoutUser } from '../controller/user-controller.js';
import { getProducts, getProductById, userListing, getUserListing } from '../controller/products-controller.js';
import multer from 'multer';

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        return cb(null, "upload/");
    },
    filename: function(req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`);
    }
});
const upload = multer({ storage });

// Route definitions
router.post('/login', userLogin); // Route for user login
router.post('/upload', upload.array('image'), userListing); // Route for uploading images
router.get('/products', getProducts); // Route for fetching products
router.get('/product/:id', getProductById); // Route for fetching a specific product by ID
router.get('/listings', getUserListing); // Route for fetching user listings
router.get('/logout', logoutUser); // Route for user logout

export default router;

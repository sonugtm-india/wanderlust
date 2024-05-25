import User from "../model/user-schema.js";
import jwt from 'jsonwebtoken';

// Secret key for JWT signing
const SECRET_KEY = "123";

// User signup function
export const userSignup = async (req, res) => {
    try {
        // Check if the user already exists
        const isUserExist = await User.findOne({ username: req.body.username });
        if (isUserExist) {
            return res.status(401).json({ msg: "User already exists" });
        }

        // Create a new user
        const newUser = new User(req.body);
        await newUser.save();

        // Generate token
        const token = jwt.sign({ username: req.body.username }, SECRET_KEY);

        // Set the token as a cookie
        res.cookie('token', token, {
            maxAge: 24 * 60 * 60 * 1000, // Cookie expiration time (in milliseconds), e.g., 1 day
            httpOnly: false // Cookie accessible only via HTTP(S) and not JavaScript
        });

        return res.status(200).json({ msg: 'Registration successful' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal user server error" });
    }
}

// User login function
export const userLogin = async (req, res) => {
    try {
        // Find the user in the database
        const { username, password } = req.body;
        const isUserExist = await User.findOne({ username: username, password: password });

        if (isUserExist) {
            // Generate token
            const token = jwt.sign({ username: username }, SECRET_KEY);

            // Set the token as a cookie
            res.cookie('token', token, {
                maxAge: 24 * 60 * 60 * 1000, // Cookie expiration time (in milliseconds), e.g., 1 day
                httpOnly: false // Cookie accessible only via HTTP(S) and not JavaScript
            });

            return res.status(200).json({ msg: 'Login successful', data: isUserExist });
        } else {
            return res.status(401).json({ msg: 'Invalid user' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal user server error" });
    }
}
export const logoutUser=(req,res)=>{
    console.log(res.token);
    res.clearCookie('token');
    return res.status(200).json({msg:"logout successfully"})
   

}
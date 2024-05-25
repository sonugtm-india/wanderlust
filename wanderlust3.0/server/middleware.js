import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (token) {
            const tokenParts = token.split(" ");
            if (tokenParts.length === 2 && tokenParts[0] === "Bearer") {
                const tokenValue = tokenParts[1];
                const user = jwt.verify(tokenValue, 'your_secret_key_here');
                req.userId = user.id;
                next();
            } else {
                res.status(401).json({ message: 'Unauthorized' });
            }
        } else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

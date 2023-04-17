const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
exports.authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token,"SocialMedia", (error, decoded) => {
      if (error) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
      req.user = { _id: decoded.userId };
      next();
    });
  };
  
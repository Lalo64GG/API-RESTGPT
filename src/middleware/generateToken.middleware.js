const jwt = require('jsonwebtoken');

const generateToken = ( ) => {
    const secretClave = process.env.JWT_SECRET;

    const payload = { }

    return jwt.sign(payload,secretClave, { expiresIn: "3h" });

}

module.exports = generateToken


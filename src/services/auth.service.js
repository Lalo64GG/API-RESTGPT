const db = require('../config/db.config');
const bcrypt = require('bcrypt');
const { generaToken } = require('../middleware/generateToken.middleware');

const authGetUser = async ({ email, password }) => {
    const connection = await db.createConnection();
    const sql = `SELECT * FROM users WHERE email = ?`;


    const result = await connection.all(sql, email);
    connection.close();
    
    if (result.length == 0) {
        throw new Error("User not found");
    }

    const user = result[0];
    const isValidPass = await bcrypt.compare(password, user.password);
    
    if (!isValidPass) {
        throw new Error("Password incorrect");
    }

    return result;
}

module.exports = {
    authGetUser
}

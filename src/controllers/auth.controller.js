const generateToken  = require('../middleware/generateToken.middleware');
const authService = require('../services/auth.service');

const authUser = async(req, res) => {
    try {

        const user = await authService.authGetUser(req.body);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        const token = generateToken();

        return res.status(200).json({
            message: "Successful login",
            user:{
                id: user[0].id,
                name: user[0].name,
                email: user[0].email
            },
            
            token: token

        })
    } catch (error) {
        console.error("Error: ", error);
    }
}

module.exports = {
    authUser
}
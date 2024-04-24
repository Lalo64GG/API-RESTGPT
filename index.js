require('dotenv').config()

const express = require('express')
const app = express();

//* Importing the routes
const userRoute = require('./src/routes/user.route')
const openaiRoute = require('./src/routes/openIa.route')
const authRoute = require('./src/routes/auth.route')

//* Importing the cors middleware
const cors = require('./src/middleware/cors.middleware')

//* Configuring the cors middleware
app.use(cors)

app.use(express.json())

app.use('/', openaiRoute);
app.use('/users', userRoute);
app.use('/auth', authRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
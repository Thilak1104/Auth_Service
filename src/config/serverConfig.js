const dotenv = require('dotenv');
const bcrpyt = require('bcrypt');

dotenv.config();

module.exports= {
    PORT: process.env.PORT,
    SALT: bcrpyt.genSaltSync(10),
    JWT_KEY:process.env.JWT_KEY
}
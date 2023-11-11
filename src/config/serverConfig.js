const dotenv = require('dotenv');
const bcrpyt = require('bcrypt');

dotenv.config();

module.exports= {
    PORT: process.env.PORT,
    SALT: bcrpyt.genSaltSync(10)
}
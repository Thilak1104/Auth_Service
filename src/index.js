const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');

const apiRoutes = require('./routes/index');

// const { User } = require('./models/index');
// const bcrpyt = require('bcrypt');
// const UserRepository = require('./repository/user-repository');

// const UserService = require('./services/user-service');


const app = express();

const prepareAndStartServer = () =>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use('/api',apiRoutes);

    app.listen(PORT,async ()=>{
        console.log(`Server Started on Port: ${PORT}`);
        // const repo = new UserRepository();
        // const response = await repo.getById(1);
        // console.log(response);
        // const incomingpassword = '123456';
        // const user = await User.findByPk(3);
        // const response = bcrpyt.compareSync(incomingpassword,user.password);
        // console.log(response);

        // const service = new UserService();
        // const newToken = service.createToken({email: 'sanket@admin.com',id:1});
        // console.log("new token is", newToken);
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmtldEBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNjk5NzcwMDE3LCJleHAiOjE2OTk3NzM2MTd9.x8bwAqquEMIZ7vskYD5AzaxW0urCPuTxqTdhbDrwpus';
        // const response = service.verifyToken(token);   
        // console.log(response);

    });
} 

prepareAndStartServer();
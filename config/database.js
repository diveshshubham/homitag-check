const mongoose = require("mongoose");
require('dotenv').config()
/running on localhost

const startMongoServer = async () => {
    try {
            await mongoose.connect(MONGOURI, {
              useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false //this will parse the mongoDB connection string
            });
            console.log("connected to mongo db");
             } 
            catch (error) 
            {
            console.log(error)
             }
        };

module.exports = startMongoServer;

const mongoose = require('mongoose');
const app = require('./app');

// const config = require("./src/config");

const port = process.env.PORT || 4500;

let mongo = "mongodb+srv://admin:admin@cluster0.toeo4.mongodb.net/test2?retryWrites=true&w=majority"

mongoose.Promise = global.Promise;
mongoose.connect(mongo, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('DB connection created successfully');

    } else {
        console.log('error in creating DB connection', err);
    }
});


const server = require('http').Server(app);

server.listen(port, (err) => {
    if (!err) {
        console.log(`server started at ${port}`);
    } else {
        console.log('error in starting server', err);
    }
});
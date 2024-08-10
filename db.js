const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URL;

const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
console.log("connected");
    })
}

module.exports = connectToMongo;
const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb+srv://srinithibalakrishnan:0xk3xejepHVVzEYp@cluster0.lw8c3rf.mongodb.net/myresturant");

connect.then(() => {
    console.log("Mongodb connected successfully");
}).catch((err) => {
    console.error("Mongodb connection error:", err);
});


const LoginSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }
});

const collection = new mongoose.model("users",LoginSchema);

module.exports = collection;
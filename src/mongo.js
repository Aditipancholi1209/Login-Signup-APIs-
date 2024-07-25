const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/")
    .then(() => {
        console.log('MongoDB Connected!');
    })
    .catch((err) => {
        console.error('Failed to Connect:', err.message);
    });


const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("collection",LoginSchema)
module.exports=collection;
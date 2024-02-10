const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PetSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    species:{
        type: String,
        required: true,
    },
    breed:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    gender:{
        type: String,
        enum: ['Male', 'Female'],
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    adopter: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }

});
module.exports = mongoose.model('Pet', PetSchema);
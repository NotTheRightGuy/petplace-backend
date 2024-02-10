const mongoose = require("mongoose");

const AdoptionSchema = mongoose.Schema({
    name: String,
    age: Number,
    species: String,
    breed: "String",
    reason: String,
    imageUrl: String,
    parentName: String,
    parentPhone: String,
    parentEmail: String,
    isAdopted: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("AdoptionForm", AdoptionSchema);

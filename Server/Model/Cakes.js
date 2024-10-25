const mongoose = require("mongoose");

const cakeSchema = new mongoose.Schema({
    cakeName: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    flavor: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },
    sellerId: {

        type: String,
        required: true

    }
})


const Cakes = new mongoose.model("cakes", cakeSchema);

module.exports = Cakes;
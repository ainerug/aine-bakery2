const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    userName: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    cakeId: {
        type: String,
        required: true
    },


})

const Orders = new mongoose.model("orders", orderSchema);

module.exports = Orders;
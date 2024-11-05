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

    customerId: {
        type: String,
        required: true
    },

    sellerId: {
        type: String,
        required: true
    },
    orderStatus:{
        type: String,
        default: "pending"
    },
    paymentMethod: {
        type: String,
        required: true
    },
    isPaid: {
        type: Boolean,
        default: false
    }
})

const Orders = new mongoose.model("orders", orderSchema);

module.exports = Orders;
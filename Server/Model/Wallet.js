const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
    orderId: {
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
    cakeId: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    cakeName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    },
    orderStatus: {
        type: String,
        required: true
    }
})

const Wallet = new mongoose.model("wallet", walletSchema);

module.exports = Wallet;
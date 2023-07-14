const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "Enter Price"],
    },
    color: {
        type: String,
        required: true,
    },
    image: {
        type: [String],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        default: "shop",
    },
    rating: {
        type: Number,
        default: "5.0",
    },
    reviews: {
        type: Number,
        default: "100",
    },
    featured: {
        type: Boolean,
        default: false,
    },
    featured_Name: {
        type: String,
        default: "Online Store",
    },
    // company: {
    //     type: String,
    //     enum: {
    //         values: ["apple", "samsung", "dell", "boat", "onepluse"],
    //         message: `{VALUE} is not supported`,
    //     },
    // },
});

module.exports = mongoose.model("Product", productSchema); 
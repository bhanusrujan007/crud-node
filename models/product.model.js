const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "enter prod name"]
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        Image: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true
    }
);

const  Product = mongoose.model("product",ProductSchema);

module.exports = Product;
const mongoose = require("mongoose")

const { Schema } = mongoose

const productSchema = new Schema({
    productCategory: {
        type: String,
        require: [true, "Obrigatorio preencher o campo!"]
    },
    productQuantity: {
        type: Number,
        require: [true, "Obrigatorio preencher o campo!"]
    },
}, {
    versionKey: false
})

const Product = mongoose.model("Product", productSchema)
module.exports = Product
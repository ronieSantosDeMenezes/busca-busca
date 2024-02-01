const mongoose = require("mongoose")

const { Schema } = mongoose

const clientSchema = new Schema({
    nameClient: {
        type: String,
        require: [true, "Obrigatorio preencher o campo!"]
    },
    cpfClient: {
        type: String,
        require: [true, "Obrigatorio preencher o campo!"]
    },
}, {
    versionKey: false
})

const Client = mongoose.model("Client", clientSchema)
module.exports = Client



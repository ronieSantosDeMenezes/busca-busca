const mongoose = require("mongoose")
const url = process.env.URL_MONGODB
console.log('URL MONGO:', url)
const conn = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url)
            .then(() => {
                console.info("db connected")
                resolve()
            })
            .catch(() => reject())
    })
}

module.exports = conn
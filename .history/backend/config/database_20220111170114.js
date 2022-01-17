const mongoose = require('mongoose');

const databaseConnect = () => {
    console.log(process.env)
    mongoose.connect("mongodb://localhost:27017//messenger", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => {
        console.log("mongodb connected...");
    }).catch(error => {
        console.error("mongodb connection error", error)
    })
}

module.exports = databaseConnect;
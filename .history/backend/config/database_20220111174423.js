const mongoose = require('mongoose');

const databaseConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = databaseConnect;
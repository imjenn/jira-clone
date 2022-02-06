const mongoose = require('mongoose');

module.exports = (db) => {
    mongoose.connect(`mongodb://localhost/${db}`)
    .then(() => console.log(`Established a connection to ${db} database`))
    .catch(err => console.log("Something went wrong when connecting to the databse", err));
}
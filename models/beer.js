const mongoose = require('mongoose');

let BeerSchema = new mongoose.Schema({
    name: String,
    type: String,
    quantity: Number
});

module.exports = mongoose.model('Beer', BeerSchema);
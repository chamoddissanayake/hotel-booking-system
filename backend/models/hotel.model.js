const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    availableCount: { type: Number, required: true },
    rating: { type: Number, required: true },
    facilities: { type: Array, required: true },
    imageURL_main: { type: String, required: true },
    imageURL_1: { type: String, required: true },
    imageURL_2: { type: String, required: true },
    imageURL_3: { type: String, required: true }
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
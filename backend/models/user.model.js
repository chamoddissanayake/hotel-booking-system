const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: true },
    password: { type: String, required: true, trim: true },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
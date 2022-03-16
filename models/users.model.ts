const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    verifiedUser: {
        type: Boolean,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: false
    },
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

console.log('test model')

module.exports = User;
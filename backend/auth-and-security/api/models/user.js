const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userEmail: {
        type: String, 
        required: true, 
        unique: true,
        match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    },
    userPassword: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    username: {type: String, required: true},
    phone_number: {type: String, required: true},
    user_id: {type: Number, required: true}
})

const User = mongoose.model("Users", UserSchema)

module.exports = { User }
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    username: { type: String, required: false },
    phone_number: { type: String, required: false },
    user_id: { type: Number, required: true }
})

const User = mongoose.model("Users", UserSchema)

module.exports = { User }
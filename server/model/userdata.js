
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userdata = new Schema({
    username: String,
    email: String,
    password:String,
    carted: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "GAME_DATA"
    }],
    wishlisted: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "GAME_DATA"
    }],
    vaulted: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "GAME_DATA"
    }],
    gcash:Number
})


module.exports = mongoose.model("USER_DATA",userdata,"USER_DATA");
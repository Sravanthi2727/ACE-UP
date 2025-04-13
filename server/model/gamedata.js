
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/ACE_UP");

const Schema = mongoose.Schema;

const gamedata= new Schema({
    
        name : String,
        price : String,
        banner: String,
        poster: String,
        logo:String,
        video: String,
        rating : Number,
        smalldes: String,
        largedes: String,
        dialouge : String,
        genre: Array,
        developer: String,
        desc: String,
        warn: String,
        features:Array,
        min: {
          cpu: String,
          gpu: String,
          os: String,
          RAM: String
        },
        max: {
          cpu: String,
          gpu: String,
          os: String,
          RAM: String
        }
})


module.exports= mongoose.model('GAME_DATA',gamedata,'GAME_DATA');
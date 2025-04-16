const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://priyanshparekh24:Pass%4025@ace-up-data.wkfpvme.mongodb.net/ACE_UP', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas!'))
.catch(err => console.error('❌ Connection error:', err));

const Schema = mongoose.Schema;

const gamedata= new Schema({
    
        name : String,
        price : String,
        banner: String,
        poster: String,
        logo:String,
        video: String,
        logo:String,
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

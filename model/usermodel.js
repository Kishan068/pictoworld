var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    image:{
        type:String
    },
    name:{
        type:String
    },
    puzzle_name:{
        type:String
    },
    cat_id:{
        type:String
    }
})

module.exports = mongoose.model('all_images',userschema);
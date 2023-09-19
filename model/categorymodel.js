var mongoose = require('mongoose');

var categoryschema = new mongoose.Schema({
    image:{
        type:String
    },
    category_name:{
        type:String
    }
})

module.exports = mongoose.model('category',categoryschema);
'use strict';
const mongoose=require('mongoose');

//creat schema for my data

const history= mongoose.Schema({
    text:{type:String, required:true},
    category:{type:String, required:true}
})

module.exports=mongoose.model('history',history);
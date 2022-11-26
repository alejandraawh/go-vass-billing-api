const mongoose = require("mongoose");
const purchaseSchema= new mongoose.Schema({
    nameTravel:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    purchaseStatus:{
        type:Boolean,
        required:true
    }
    
});

module.exports = mongoose.model('Purchase', purchaseSchema);
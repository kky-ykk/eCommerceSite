const mongoose=require('mongoose');
const bcrypt=require("bcrypt");


//define products schema
const productsSchema =new  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    originalPrice:{
        type:Number,
        required:true
    },
    discountPrice:{
        type:Number
    },
    images:{
        type:Array,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    reviews:{
        type:Number,
        deafult:10
    },
    measurement:{
        type:String
    },
    category:{
        type:String,
        required:true
    },
    weight:{
        type:String
    },
    stockItem:{
        type:Number,
        default:5
    },
    width:{
        type:String,
        deafult:"7b"
    }
});

//create user model
const products=mongoose.model('Products',productsSchema);

module.exports=products;
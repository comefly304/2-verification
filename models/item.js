const mongoose=require('mongoose')

const itemschema=new mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    phone:{type:String},
    email:{type:String},
    password:{type:String}
},{
    timestamps:true
})

const Item=mongoose.model("itemspractice2",itemschema)

module.exports=Item
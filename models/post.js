const mongoose=require('mongoose')

const postschema=new mongoose.Schema({
    title:{type:String},
    desc:{type:String},
    username:{type:String}
  
},{
    timestamps:true
})

const Pst=mongoose.model("postspractice",postschema)

module.exports=Pst
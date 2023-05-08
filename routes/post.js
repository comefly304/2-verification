const postrouter=require('express').Router()
const Post=require('../models/post')
const bcrypt=require('bcrypt')
const Item=require('../models/item')
const Authentication=require('../middlewares/auth')



//register data
postrouter.post("/api/post",async(req,res)=>{
    try{
const {title,desc}=req.body
const newpost=new Post({
    title,
    desc
})
await newpost.save()
return res.send(newpost)
    }catch(err){
        console.log(err)
    }
})

//get post
postrouter.get("/api/get",async(req,res)=>{
    try{
  const getpost=await Post.find()
  return res.send(getpost)
    }catch(err){
        console.log(err)
    }
})

//update post
postrouter.put("/api/post/:id",async(req,res)=>{
    try{
        const post=await Post.findById(req.params.id)
        if(req.body.postId===req.params.id){
            const updatepost=await Post.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true})
            return res.send(updatepost)
        }
    }
    catch(err){
        console.log(err)
    }
})

//delete post
postrouter.delete("/api/post/:id",async(req,res)=>{
    try{
   const deletepost=await Post.findById(req.params.id)
   if(req.body.postId===req.params.id){
    await Post.findByIdAndDelete(req.params.id)
    return res.send("post deleted")
   }
    }catch(err){
        console.log(err)
    }
})

module.exports=postrouter
//6458761f804970fb76537bfc
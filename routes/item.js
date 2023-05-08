const router=require('express').Router()
const Item=require('../models/item')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const Authentication = require('../middlewares/auth')


//register data
router.post("/api/register",async(req,res)=>{
    try{
const {  firstname,lastname,phone,email,password}=req.body
const hash=await bcrypt.hash(password,10)
const newitem=new Item({
    firstname,lastname,phone,email,
    password:hash
})

await newitem.save()
const token=jwt.sign({userId:newitem._id},process.env.JWT_SECRET)

return res.json({
    token:token,
    user:newitem
})
    }catch(err){
        console.log(err)
    }
})


//login data
router.post("/api/login",Authentication,async(req,res)=>{
    try{
  const {email,password}=req.body
  const user=await Item.findOne({email})
   bcrypt.compare(password,user.password,function(err,result){
    if(err){
        return res.send(err)
    }
    if(result){
      const {password,...others}=user._doc
        return res.json(others)
    }
  })
    }catch(err){
        return res.send(err)
    }
})

//authenticated
router.get("/protected",Authentication,async(req,res)=>{
    const {token}=req.body
       const decode=jwt.decode(token)
       return res.send(decode)
})


module.exports=router
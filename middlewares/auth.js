const jwt=require('jsonwebtoken')

function Authentication(req,res,next){
      const token=req.headers["authorization"] || req.query.token || req.body.token;
      if(!token){
        return res.send('token is invaid')
      }
      try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded.user
        next()
      }catch(err){
        return res.send(err)
      }
      
}
module.exports=Authentication
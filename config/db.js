const mongoose=require('mongoose')

function Connection(){
    try{
     mongoose.connect(process.env.DBURL)
     console.log('db connected')
    }catch(err){
        console.log(err)
    }
}

module.exports=Connection
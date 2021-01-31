const { Mongoose } = require("mongoose")
const config=require('config')

const connectDB=()=>{
    mongoose.connect(config.get("MONGOURI"),{useUnifiedTopogy: true})
    .then(()=>console.log("mongoose connected"))
    .catch(()=>console.log("erreur DB"))
}
mondule.exports=connectDB

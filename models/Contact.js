const mongoose=require ("mongoose") 
const schema=mongoose.schema


const ContactSchema= new schema({
name:{type:string},
email:{type:string},
phone:{type:number}

})
module.exports=Contact=mongoose.model('',ContactSchema)
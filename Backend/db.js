const mongoose=require("mongoose");

mongoose.connect("process.env.MONGO_URL")
// mongoose.connect("process.env.Mongo_url").then((data)=>{
//     console.log("Connected to database")
// })

const todoschema=mongoose.Schema({
    title:String,
    descrption:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoschema);

module.exports={
    todo
}

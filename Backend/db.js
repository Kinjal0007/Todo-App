const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://admin:XNZ7hUO3CVlEeY5S@cluster0.q0uwl5k.mongodb.net/")
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
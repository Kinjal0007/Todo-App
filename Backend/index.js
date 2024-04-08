const express=require("express");
const { createTodo, updateTodo } = require("./types");
const {todo}=require("./db");
const cors=require("cors");
const app=express();

app.use(express.json());
app.use(cors());

app.post("/todo",async function(req,res){
    const createPayload=req.body;
    const createUser=createTodo.safeParse(createPayload);

    if(!createUser.success){
        res.status(411).json({
            msg:"You've entered wrong inputs"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed:false
    })
    res.json({
        msg:"Todo created"
    })
})

app.get("/todos",async function(req,res){
    const todos=await todo.find({})
    res.json({
        todos
    })
})

app.put("/completed",async function(req,res){
    const updatePayload=req.body;
    const updateUser=updateTodo.safeParse(updatePayload);
    if(!updateUser.success){
        res.status(411).json({
            msg:"You've entered wrong inputs"
        })
        return;
    }

    await todo.update({
        id:req.body.id
    },{
        completed:true
    })

    res.json({
        msg:"Todo marked as completed"
    })
})

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Port has been connected at ${PORT}`)
})
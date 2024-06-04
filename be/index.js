import express from "express";
import cors  from"cors";
import mongoose  from"mongoose";
import userRoute  from"./routes/userRoute"
import chatRoute  from'./routes/chatRoute'
import messageRoute  from'./routes/messageRoute'

const app=express();
require("dotenv").config();


app.use(cors());
app.use("/api/users",userRoute);
app.use("/api/chats",chatRoute);
app.use("/api/messages",messageRoute);


const port = process.env.PORT ||8000
//CONNECT DB
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('Connect to MongoDB');
}).catch((error)=>{
    console.log(error);
})

app.listen(port,(req,res)=>{
    console.log(`Server is running...: ${port}`);
})
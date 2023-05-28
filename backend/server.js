const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const notes = require("./data/notes");
const userRoutes = require("./routes/UserRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(()=>console.log("Connected to DB.")) 
  .catch((err)=>console.log(err));

app.use(express.json());

app.use(notFound);
app.use(errorHandler);
  

app.get("/",(req,res)=>{
    res.send("API is running");
});

app.get("/api/notes",(req,res)=>{
    res.json(notes);
});

// app.get("/api/notes/:id",(req,res)=>{
//     const note = notes.find((n)=> n._id === req.params.id);
//     res.send(note);
// })

app.use("/api/users", userRoutes)



const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
});


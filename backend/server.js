import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRouter.js"
import dotenv from "dotenv";
dotenv.config();



// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors()) 

// db connection
connectDB();

// API endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
    res.send("API is working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})




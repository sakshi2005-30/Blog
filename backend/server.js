require("dotenv").config();
const express=require("express");
const app=express();
const PORT=process.env.PORT;
const connectToDB=require("./config/db")    
const authRoutes=require("./routes/authRoutes")
const blogRoutes=require("./routes/blogRoutes");
const cors=require("cors");
const cookieParser = require("cookie-parser");
const { truncates } = require("bcryptjs");
connectToDB()
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:truncates
}));
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/blogs",blogRoutes);
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})
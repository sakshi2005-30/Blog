const express=require("express");
const router=express.Router();
const {login,register,me,logout}=require("../Controllers/UserController")
const protect=require("../Middleware/authMiddleware")
router.post("/login",login);
router.post("/register",register);
router.get("/me",protect,me);
router.get("/logout",protect,logout);
module.exports=router
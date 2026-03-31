const User=require("../models/User");
const bycrpt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const createToken=(id,time)=>{
    return jwt.sign({id:id},process.env.JWT_SECRET_KEY,{expiresIn:`${time}d`});
}
const register=async(req,res,next)=>{
    try{
        const {name,email,password}=req.body;
        if(!name || !email ||!password){
            return res.json(400).json({
                message:"All fields are required"
            })
        }

        const userExists=await User.findOne({email});
        if(userExists){
            return res.status(400).json({
                message:"User already exists"
            })
        }

        //hash password
        const hashedPassword=await bycrpt.hash(password,10);

        const user=await User.create({
            name,
            email,
            password:hashedPassword
        })  
        const token=createToken(user._id,"1");

        res.cookie("accessToken",token,{
            httpOnly:true,
            secure:false,
            sameSite:"lax"
        })
        res.status(200).json({
            user,token
        })

    }
    catch(error){
        console.log("Server error",error);
        return res.status(500).json({
            message:"Server error"
        })
    }
}

const login=async(req,res,next)=>{
    try{
        const {email,password}=req.body;
        if(!email ||!password){
            return res.json(400).json({
              message: "All fileds are required",
            });
        }
        const userExists = await User.findOne({ email });
        if (!userExists) {
          return res.status(400).json({
            message: "User doesn't exists",
          });
        }

        const compare=await bycrpt.compare(password,userExists.password);
        if(!compare){
            return res.status(404).json({
                message:"Username or password is wrong"
            })
        }
        const token=createToken(userExists._id,"1");
        
        res.cookie("accessToken", token, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
        });
        res.status(200).json({
          userExists,
          token,
        });
        
    }
    catch(error){
        console.log("Error in login",error);
        return res.status(500).json({
            message:"Server error"
        })
    }
}

const me=async(req,res,next)=>{
    try{
        const user=await User.find({_id:req.user});
        res.status(200).json(user);
    }
    catch(error){
        console.log("Error in getting me",error);
        res.status(500).json({
            message:"Server error"
        })
    }
}
const logout=async(req,res,next)=>{
    res.clearCookie("accessToken");
    res.status(200).json({
        message:"Logout sucessfull"
    })
}
module.exports={register,login,me,logout}
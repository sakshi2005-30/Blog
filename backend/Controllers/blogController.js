const Blog = require("../models/Blog");
const cloudinary=require("../utils/Cloudinary")
const createBlog = async (req, res, next) => {
    try{
        const {title,content,category}=req.body;
        if(!title || !content ||!category){
            return res.status(404).json({
                message:"All fields are required"
            })
        }
        if(!req.file){
            return res.status(404).json({
                message:"Image is required"
            })
        }
        const result=await cloudinary.uploader.upload(req.file.path);
        //console.log("res:",res);
        const blog=await Blog.create({
            title,content,author:req.user,
            category,image:{
                url:result.secure_url,
                public_id:result.public_id
            }
        })
        res.status(201).json(blog);
    }
    catch(error){
        console.log("Error in creating blog",error);
        res.status(500).json({
            message:"Server error"
        })
    }
};
const getAllBlogs = async (req, res, next) => {
    try{
        const blogs=await Blog.find().populate("author");
        res.status(200).json(blogs);
    }
    catch(error){
        console.log("Error in getting all blogs", error);
        res.status(500).json({
          message: "Server error",
        }); 
    }
};
const getSingleBlog = async (req, res, next) => {
    try{
        const id=req.params.id;
       
        const blog=await Blog.findOne({_id:id}).populate("author");
        res.status(200).json(blog);
    }
    catch(error){
         console.log("Error in getting single blog", error);
         res.status(500).json({
           message: "Server error",
         }); 
    }
};
const updateBlog = async (req, res, next) => {
    try{
        const id=req.params.id;
        const blog=await Blog.findByIdAndUpdate({_id:id,author:req.user},req.body,{new:true});
        res.status(200).json(blog)
    }
    catch(error){
         console.log("Error in updating blog", error);
         res.status(500).json({
           message: "Server error",
         }); 
    }
};
const deletBlog = async (req, res, next) => {
    try{
        const id=req.params.id;
        const blog=await Blog.findByIdAndDelete({_id:id});
        res.status(204).json({
            message:"Deleted successfully"
        })
    }
    catch(error){
         console.log("Error in deleting blog", error);
         res.status(500).json({
           message: "Server error",
         }); 
    }
};

module.exports={createBlog,getAllBlogs,getSingleBlog,updateBlog,deletBlog};
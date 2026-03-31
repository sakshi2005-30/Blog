const express=require("express");
const router=express.Router();
const upload=require("../Middleware/imageMiddleware");
const protect=require("../Middleware/authMiddleware");
const {createBlog,getAllBlogs,getSingleBlog,updateBlog,deletBlog}=require("../Controllers/blogController")

router.post("/",protect,upload.single("image"),createBlog);
router.get("/allBlogs",getAllBlogs);
router.get("/singleBlog/:id",getSingleBlog);
router.delete("/:id",protect,deletBlog);
router.patch("/:id",protect,updateBlog);
module.exports=router;
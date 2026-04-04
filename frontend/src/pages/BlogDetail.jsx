import { useParams } from "react-router-dom";
import {useEffect,useState} from "react";
import { getSingleblog } from "../services/blogApi";
const BlogDetail = () => {
  const {id}=useParams();
  const [blog,setBlog]=useState([]);
  useEffect(()=>{
    const fecthBlog=async()=>{
      try{
        const result=await getSingleblog(id);
        setBlog(result.data);
        console.log("blog",result.data);
      }
      catch(err){
        console.log(err);
      }
    }
    fecthBlog();
  },[])
  const getDate=(d)=>{
    const date= new Date(d);
    const today=date.toLocaleDateString("en-us",{
      month:"long",
      year:"numeric",
      day:"numeric"
    })
    return today
  }

  return (
    <div className="my-16">
      <div className="py-16 px-12 flex justify-center flex-col gap-6">
        <p className="text-2xl font-bold">{blog.title}</p>
        <div className="w-5xl flex flex-col gap-2 ">
          <p className="px-4 py-1 rounded-xl bg-primary/20 w-24 text-center text-sm text-primary font-medium">
            {blog?.category}
          </p>
          <img
            src={blog?.image?.url}
            alt={blog._id}
            className=" h-100 object-fit rounded-xl shadow-md "
          />
        </div>
        <div className="flex gap-4 items-center">
          <p className="w-8 h-8 bg-primary rounded-full text-white text-sm flex justify-center items-center font-medium">
            {blog?.author?.name
              .split(" ")
              .map((word) => word[0])
              .join("")
              .toUpperCase()}
          </p>
          <div>
            <p className="text-sm font-medium">{blog?.author?.name}</p>
            <p className="text-sm text-gray-500">{getDate(blog.createdAt)}</p>
          </div>
        </div>

        <div>
          <p>{blog.content}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail
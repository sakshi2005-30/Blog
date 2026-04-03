import React from 'react'
import { useState, useEffect } from "react";
import { getAllBlogs } from "../services/blogApi";
const DisplayBlogs = () => {
     const [blogs, setBlogs] = useState([]);
     useEffect(() => {
       const fetchBlogs = async () => {
         try {
           const data = await getAllBlogs();
           console.log("blogs:", data.data);
           setBlogs(data.data);
         } catch (error) {
           console.log("Error in getting blogs", err);
         }
       };
       fetchBlogs();
     }, []);
     const getDate=(d)=>{
        const date=new Date(d);
        return date.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
     }
  return (
    <div className="py-16 px-12">
      <h1>Blogs</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
        {blogs.length > 0 &&
          blogs.map((item) => (
            <div
              key={item._id}
              className="shadow-md px-6 py-4 rounded-xl bg-white"
            >
              <div>
                <img
                  src={item.image.url}
                  alt=""
                  className=" h-50 w-full object-fill rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-lg font-bold tracking-wide">{item.title}</p>
                <p className="text-sm text-gray-500">
                  {item.content.split(".")[0] + "."}
                </p>
              </div>
              <hr className="text-gray-400 my-4"></hr>
              <div>
                <div className="flex gap-4 items-center">
                  <p className="h-8 w-8 bg-primary text-white font-medium flex justify-center items-center rounded-full text-sm">
                    {item.author.name
                      ?.split(" ")
                      .map((word) => word[0])
                      .join("")
                      .toUpperCase()}
                  </p>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium">{item.author.name}</p>
                    <p className="text-xs text-gray-400">
                      {getDate(item.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default DisplayBlogs
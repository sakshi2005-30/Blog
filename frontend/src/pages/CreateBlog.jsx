import { useState,useEffect, useRef } from "react";
import { createBlog } from "../services/blogApi";
const CreateBlog = () => {
  const [title,setTitle]=useState("");
  const [category,setCategory]=useState("Design");
  const [content,setContent]=useState("");
  const [image,setImage]=useState(null);
  const [categoryOpen,setCategoryOpen]=useState(false);
  const catRef=useRef(null);
  console.log("cat:",categoryOpen)
  useEffect(()=>{
    const handleCategoryOutside=(e)=>{
      if(catRef.current && !catRef.current.contains(e.target)){
        setCategoryOpen(false);
      }
    }
    document.addEventListener("click",handleCategoryOutside);
    return ()=>{
      document.removeEventListener("click", handleCategoryOutside);
    }
  },[]);
  const categoryItems = [
    {
      id: 1,
      name: "Design",
    },
    {
      id: 2,
      name: "Technology",
    },
    {
      id: 3,
      name: "Culture",
    },
    {
      id: 4,
      name: "Travel",
    },
    {
      id: 5,
      name: "Food",
    },
    {
      id: 6,
      name: "Science",
    },
  ];
  const handleCreateBlog=async(e)=>{
    e.preventDefault();
    try{
      const formData=new FormData();
      formData.append("title",title);
      formData.append("content",content);
      formData.append("image",image);
      formData.append("category",category);
      const data=await createBlog(formData);
      console.log("data blog:",data);
      setTitle("");
      setCategory("Design");
      setContent("");
      setImage(null)
    }
    catch(err){
      console.log("error in creating blog",err);
    }
  }
  return (
    <div className="my-16">
      <div className="max-w-4xl w-full mx-auto  justify-start  py-16  px-12 flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <p className="text-3xl font-bold">Write a new story</p>
          <p className="text-gray-500 text-sm">
            Share your thoughts with the world.
          </p>
        </div>

        <div>
          <form className="flex flex-col space-y-6" onSubmit={handleCreateBlog}>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="title"
                className="text-sm font-medium text-gray-500"
              >
                Title
              </label>
              <input
                type="text"
                value={title}
                name="title"
                placeholder="Your story begins with a great title.."
                onChange={(e) => setTitle(e.target.value)}
                className="ring ring-primary/30 px-4 py-2 placeholder:text-sm rounded-lg bg-white/70 focus-within:ring-2 focus-within:ring-primary/60 outline-none  
              
              focus-within:shadow-md
              "
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="title"
                className="text-sm font-medium text-gray-500"
              >
                Category
              </label>
              <div>
                <div
                  className="ring ring-primary/30 px-4 py-2 placeholder:text-sm rounded-lg bg-white/70 focus-within:ring-2 focus-within:ring-primary/60 outline-none  text-sm cursor-pointer
              focus-within:shadow-md relative
              "
                  ref={catRef}
                  onClick={() => setCategoryOpen((prev) => !prev)}
                >
                  {category}

                  {categoryOpen && (
                    <div className="absolute mt-1 bg-white top-9 left-0 z-40  rounded-lg ring ring-primary/30">
                      {categoryItems.map((item) => (
                        <div
                          key={item.id}
                          className=" cursor-pointer hover:bg-gray-100 px-4 py-2 text-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCategory(item.name);
                            setCategoryOpen(false);
                          }}
                        >
                          {item.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium text-gray-500"> Cover Image</p>
              <label htmlFor="imageUpload" className="cursor-pointer">
                <div
                  className="ring ring-primary/30 px-6 flex justify-center items-center text-sm py-4 placeholder:text-sm rounded-lg bg-primary/10
              "
                >
                  <div className="flex flex-col items-center gap-2">
                    <p className="font-medium">Click to upload</p>
                    <p className="text-gray-500 text-xs">PNG, JPG up to 4MB</p>
                  </div>
                  <input
                    id="imageUpload"
                 
                    type="file"
                    className="hidden"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
                {image && (
                  <p className="text-gray-500 text-sm">
                    Selected: {image.name}
                  </p>
                )}
              </label>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium text-gray-500">Content</p>
              <textarea
                rows={15}
                value={content}
                className="w-full ring ring-primary/30 px-4 py-2 placeholder:text-sm rounded-lg bg-white/70 focus-within:ring-2 focus-within:ring-primary/60 outline-none  text-sm cursor-pointer
              focus-within:shadow-md "
                placeholder="Tell your story.."
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <button className="w-40 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-extra cursor-pointer text-sm font-medium">
              Publish Story
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog
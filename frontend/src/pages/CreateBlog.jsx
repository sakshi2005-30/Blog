import { useState } from "react";

const CreateBlog = () => {
  const [title,setTitle]=useState("");
  const [category,setCategory]=useState("Design");
  const [content,setContent]=useState("");
  const [image,setImage]=useState(null);
  const [categoryOpen,setCategoryOpen]=useState(false);
  console.log("cat:",categoryOpen)
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
  return (
    <div className="my-16">
      <div className="max-w-4xl w-full mx-auto  justify-start  py-16 flex flex-col px-12">
        <div className="flex flex-col space-y-2">
          <p className="text-3xl font-bold">Write a new story</p>
          <p className="text-gray-500">Share your thoughts with the world.</p>
        </div>

        <div>
          <form>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="title"
                className="text-sm font-medium text-gray-500"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Your story begins with a great title.."
                onChange={(e) => setTitle(e.target.value)}
                className="ring ring-gray-400 px-4 py-2 placeholder:text-sm rounded-lg bg-white/70 focus-within:ring-2 focus-within:ring-primary/60 outline-none  
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
                  className="ring ring-gray-400 px-4 py-2 placeholder:text-sm rounded-lg bg-white/70 focus-within:ring-2 focus-within:ring-primary/60 outline-none  text-sm
              focus-within:shadow-md
              "
                  onClick={() => setCategoryOpen((prev) => !prev)}
                >
                  {category}
                </div>
              </div>
              {categoryOpen && (
                <div className="bg-white z-50 fixed w-full rounded-lg ring ring-gray-400">
                  {categoryItems.map((item) => (
                    <div
                      key={item.id}
                      className="cursor-pointer hover:bg-gray-100 px-4 py-2 text-sm"
                      onClick={() => {
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

            <div className="">
              <label htmlFor="image">Cover Image</label>
              <div
                className="ring ring-primary/30 px-6 flex justify-center items-center text-sm py-4 placeholder:text-sm rounded-lg bg-primary/10
              "
              >
                <div className="flex flex-col gap-2">
                  <p className="font-medium">Drag & drop or click to upload</p>
                  <p className="text-gray-500">PNG, JPG up to 10MB</p>
                </div>
                <input type="file" className="hidden" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog
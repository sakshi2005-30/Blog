import {api} from "./api";
export const createBlog = (data) => {
  return api.post("/blogs", data);
};
export const getAllBlogs = () => {
  return api.get("/blogs/allBlogs");
};
export const getSingleblog = (id) => {
  return api.get(`/blogs/singleBlog/${id}`);
};
export const updateBlog = (id) => {
  return api.patch(`/blogs/${id}`);
};
export const deleteBlog = (id) => {
  return api.delete(`/blogs/${id}`);
};
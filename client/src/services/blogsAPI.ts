//http://localhost:8000/api/v1/create

import axios from "axios";
import { Blog, createBlogType } from "../types/Blog";

export const createBlog = async (blog: createBlogType) => {
  try {
    const data = await axios.post("http://localhost:8000/api/v1/create", blog);

    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message);
    } else {
      throw new Error("something went wron during posting");
    }
  }
};

//http://localhost:8000/api/v1/allBlogs

export const getBlogs = async () => {
  try {
    const data = await axios.get("http://localhost:8000/api/v1/allBlogs");

    const response: Blog[] = data.data?.blogs;

    return response;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message);
    } else {
      throw new Error("something went wron during posting");
    }
  }
};


export const getBlog = async (id: string | undefined) => {
    try {
      const data = await axios.get(`http://localhost:8000/api/v1/blog/${id}`);

      const response: Blog = data.data?.blog
  
  
      return response;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message);
      } else {
        throw new Error("something went wron during posting");
      }
    }
  };
import { Blog } from "./Blog";

export interface User {
  _id: string;
  userName: string;
  profilePic: string;
  role: "writer" | "admin",
  blogs: Blog[];
  comments: string[];
  likes: string[];
  createdAt: string;
  updatedAt: string;
}

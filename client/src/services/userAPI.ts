import axios from "axios";
import { User } from "../types/User";

interface Payload {
  userName: string;
  password: string;
}

export const signUp = async (playload: Payload) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/createUser",
      playload,
      { withCredentials: true }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message);
    } else {
      throw new Error("something went wron during posting");
    }
  }
};

export const logIn = async (playload: Payload) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/login",
      playload,
      { withCredentials: true }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message);
    } else {
      throw new Error("something went wron during posting");
    }
  }
};

export const logOut = async () => {
  try {
    await axios.get("http://localhost:8000/api/v1/logout", {
      withCredentials: true,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message);
    } else {
      throw new Error("something went wron during posting");
    }
  }
};

export const getCurrentUser = async (): Promise<User> => {
  try {
    const response = await axios.get<User>(
      "http://localhost:8000/api/v1/currentUser",
      { withCredentials: true }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "failed to fetch user data"
      );
    } else {
      throw new Error("Something went wrong while fetching user data");
    }
  }
};

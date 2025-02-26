import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../services/useAuthentication";

const Login = () => {
  const { login, isLoggingIn } = useLogin();

  const [credentials, setCredentials] = useState({
    userName: "achi",
    password: "123123",
  });

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login(credentials);
  }

  return (
    <main className="h-screen w-full flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className={`${
          isLoggingIn && "opacity-20"
        }  border border-black w-1/2 h-1/2 flex flex-col gap-2 rounded-md items-center justify-center`}
      >
        <h1 className="mb-5 text-4xl uppercase">Log In</h1>
        <input
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, userName: e.target.value }))
          }
          type="text"
          className="w-[18rem] h-[2rem] text-center bg-transparent border border-black rounded-md text-sm px-2"
          placeholder="enter username..."
        />
        <input
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, password: e.target.value }))
          }
          type="password"
          className="w-[18rem] h-[2rem] bg-transparent border border-black text-center rounded-md text-sm px-2"
          placeholder="enter password..."
        />
        <button
          type="submit"
          className="text-[#F4F4F4] bg-black text-sm w-[18rem] h-[2rem] hover:bg-opacity-80 transition-all"
        >
          Log in
        </button>
        <Link
          to={"/signup"}
          className="text-black text-sm underline hover:opacity-50"
        >
          make an account
        </Link>
      </form>
    </main>
  );
};

export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(userName);
    console.log(password);
  };
  return (
    <div className={"flex items-center h-[100vh]"}>
      <div className={"w-96 m-auto p-6 bg-white"}>
        <h1 className={"mb-8 text-5xl"}>Login</h1>
        <div className={"border-b border-solid border-[#cccccc] mb-8"}></div>
        <div>
          <label
            className={
              "block mb-2 items-center justify-start font-bold text-base"
            }
          >
            Username
          </label>
          <input
            type="text"
            className={
              "w-full p-2 text-base text-black font-semibold mb-4 border-none rounded bg-gray-100"
            }
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label
            className={
              "block mb-2 items-center justify-start font-bold text-base"
            }
          >
            Password
          </label>
          <input
            type="password"
            className={
              "w-full p-2 text-base text-black font-semibold mb-4 border-none rounded bg-gray-100"
            }
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className={
            "w-full mb-8 h-12 font-bold text-base bg-blue-500 text-white py-2 px-4 border-none rounded cursor-pointer"
          }
          onClick={handleLogin}
        >
          Login
        </button>
        <p className={"flex gap-1 text-[#8d8484] text-sm"}>
          belum punya akun?
          <Link className={"text-black font-semibold text-sm"} to="/register">
            Yuk daftar sekearang!
          </Link>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;

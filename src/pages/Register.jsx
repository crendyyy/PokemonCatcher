import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleRegister = () => {};

  return (
    <div className={"flex items-center h-[100vh]"}>
      <div className={"w-96 m-auto p-6 bg-white"}>
        <h1 className={"mb-8 text-5xl"}>Register</h1>
        <p className={"font-semibold text-base mb-6"}>
          Start your journey today to become the best Pokemon Trainer ever
          lived.
        </p>
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
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label
            className={
              "block mb-2 items-center justify-start font-bold text-base"
            }
          >
            Email
          </label>
          <input
            type="text"
            className={
              "w-full p-2 text-base text-black font-semibold mb-4 border-none rounded bg-gray-100"
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div>
          <label
            className={
              "block mb-2 items-center justify-start font-bold text-base"
            }
          >
            Repeat Password
          </label>
          <input
            type="password"
            className={
              "w-full p-2 text-base text-black font-semibold mb-4 border-none rounded bg-gray-100"
            }
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>
        <button
          className={
            "w-full mb-8 h-12 font-bold text-base bg-blue-500 text-white py-2 px-4 border-none rounded cursor-pointer"
          }
          onClick={handleRegister}
        >
          Register
        </button>
        <p className={"flex gap-1 text-[#8d8484] text-sm"}>
          sudah punya akun?
          <Link className={"text-black font-semibold text-sm"} to="/login">
            Login!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

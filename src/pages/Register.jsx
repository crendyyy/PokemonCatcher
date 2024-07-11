import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/FormContext";

const Register = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState({});
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    let typeError = {};

    if (!userName || !password || !email || !repeatPassword) {
      typeError.empty = "Harap mengisi semua input";
    }

    if (Object.keys(typeError).length > 0) {
      setError(typeError);
      return;
    }

    if (password === repeatPassword) {
      const isSucces = register(userName, email, password);
      if (isSucces) {
        navigate("/login");
      } else {
        setError({ general: "Email atau Username sudah terdaftar" });
      }
    } else {
      setError({ diffpass: "Password tidak sama" });
    }
  };

  return (
    <div className={"flex items-center h-[100vh] bg-white"}>
      <div className={"w-96 m-auto p-6 flex flex-col gap-6 bg-white"}>
        <h1 className={"text-5xl"}>Register</h1>
        <div className="flex flex-col gap-2">
          <p className={"font-semibold text-base"}>
            Start your journey today to become the best Pokemon Trainer ever
            lived.
          </p>
          <div className={"border-b border-solid border-[#cccccc]"}></div>
          {error.general && <p className="text-red-500">{error.general}</p>}
          {error.empty && <p className="text-red-500">{error.empty}</p>}
          {error.diffpass && <p className="text-red-500">{error.diffpass}</p>}
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              className={"block items-center justify-start font-bold text-base"}
            >
              Username
            </label>
            <input
              type="text"
              className={
                "w-full p-2 text-base text-black font-semibold border-none rounded bg-gray-100"
              }
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className={"block items-center justify-start font-bold text-base"}
            >
              Email
            </label>
            <input
              type="text"
              className={
                "w-full p-2 text-base text-black font-semibold border-none rounded bg-gray-100"
              }
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className={"block items-center justify-start font-bold text-base"}
            >
              Password
            </label>
            <input
              type="password"
              className={
                "w-full p-2 text-base text-black font-semibold border-none rounded bg-gray-100"
              }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className={"block items-center justify-start font-bold text-base"}
            >
              Repeat Password
            </label>
            <input
              type="password"
              className={
                "w-full p-2 text-base text-black font-semibold border-none rounded bg-gray-100"
              }
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>
          <button
            className={
              "w-full h-12 font-bold text-base bg-blue-500 text-white py-2 px-4 border-none rounded cursor-pointer"
            }
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
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

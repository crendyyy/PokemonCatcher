import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/FormContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const { login } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    let typeError = {};
    if (!email || !password) {
      typeError.empty = "Email dan Password harus terisi";
    }
    if (Object.keys(typeError).length > 0) {
      setError(typeError);
      return;
    }
    const isSucces = login(email, password);
    if (isSucces) {
      navigate("/");
    } else {
      setError({ general: "Email dan Password salah" });
    }
  };
  return (
    <div className={"flex items-center h-[100vh] bg-white"}>
      <div className={"w-96 m-auto p-6 flex flex-col gap-8 bg-white"}>
        <h1 className={"text-5xl"}>Login</h1>
        <div className={"border-b border-solid border-[#cccccc]"}></div>
        {error.general && <p className="text-red-500">{error.general}</p>}
        {error.empty && <p className="text-red-500">{error.empty}</p>}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              className={"block items-center justify-start font-bold text-base"}
            >
              Username
            </label>
            <input
              type="email"
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
          <button
            className={
              "w-full h-12 font-bold text-base bg-blue-500 text-white py-2 px-4 border-none rounded cursor-pointer"
            }
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
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

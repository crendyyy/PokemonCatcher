import { Outlet } from "react-router-dom";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import Aside from "./components/Shared/Aside";
import Home from "./pages/Home";
import CatchPokemon from "./pages/CatchPokemon";
import Navbar from "./components/Shared/Navbar";
import MyPokemon from "./pages/MyPokemon";
import Shop from "./pages/Shop";

const LayoutFirst = () => {
  return (
    <>
      <div className="flex">
        <Aside />
        <div className="flex flex-col w-full bg-white ml-80">
          <Navbar />
          <main className="w-full p-10 bg-[#F4F4F4]">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};
const LayoutSecond = () => {
  return (
    <>
      <div className="flex">
        <Aside />
        <div className="flex flex-col w-full ml-80">
          <Navbar />
          <img className="relative w-full bg-transparent h-80" src="" alt="" />
          <main className="w-full px-10 top-[-64px] relative">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

const routes = [
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <LayoutFirst />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "/catchPokemon",
            children: [{ index: true, element: <CatchPokemon /> }],
          },
        ],
      },
      {
        path: "/",
        element: <LayoutSecond />,
        children: [
          {
            path: "/myPokemon",
            children: [{ index: true, element: <MyPokemon /> }],
          },
          {
            path: "/shop",
            children: [{ index: true, element: <Shop /> }],
          },
        ],
      },
    ],
  },
];

export default routes;

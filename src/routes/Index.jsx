import { Outlet, useLocation } from "react-router-dom";
import LoginPage from "../pages/Login";
import Register from "../pages/Register";
import Aside from "../components/Shared/Aside";
import Home from "../pages/Home";
import CatchPokemon from "../pages/CatchPokemon";
import Navbar from "../components/Shared/Navbar";
import MyPokemon from "../pages/MyPokemon";
import Shop from "../pages/Shop";
import BackgroundShopHero from "../assets/BgShop.png";
import BackgroundMyPokemonHero from "../assets/BgMyPokemon.png";
import RedirectIfLogin from "./RedirectIfLogin";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;

  let background =
    path === "/myPokemon" ? BackgroundMyPokemonHero : BackgroundShopHero;
  return (
    <>
      <div className="flex">
        <Aside />
        <div className="flex flex-col w-full bg-[#F4F4F4]  ml-80">
          <Navbar />
          {path === "/myPokemon" || path === "/shop" ? (
            <>
              <img
                className="relative w-full bg-transparent h-80"
                src={background}
                alt=""
              />
              <main className="w-full px-10 top-[-64px] relative">
                <Outlet />
              </main>
            </>
          ) : (
            <>
              <main className="w-full p-10 bg-[#F4F4F4] mt-[72px]">
                <Outlet />
              </main>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const routes = [
  {
    path: "/",
    element: (
      <RedirectIfLogin to="/dashboard">
        <LoginPage />
      </RedirectIfLogin>
    ),
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
        element: (
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        ),
        children: [
      
          {
            path: "/dashboard",
            children: [{ index: true, element: <Home /> }],
          },
          {
            path: "/catchPokemon",
            children: [{ index: true, element: <CatchPokemon /> }],
          },
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
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default routes;

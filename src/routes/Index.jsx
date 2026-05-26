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
import { useState, useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Auto-close sidebar on route change (mobile)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  let background =
    path === "/myPokemon" ? BackgroundMyPokemonHero : BackgroundShopHero;
  return (
    <>
      <div className="flex">
        <Aside
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <div className="flex flex-col w-full bg-[#F4F4F4] md:ml-80">
          <Navbar onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
          {path === "/myPokemon" || path === "/shop" ? (
            <>
              <img
                className="relative w-full bg-transparent h-48 md:h-80 object-cover"
                src={background}
                alt=""
              />
              <main className="w-full px-4 md:px-10 top-[-32px] md:top-[-64px] relative">
                <Outlet />
              </main>
            </>
          ) : (
            <>
              <main className="w-full p-4 md:p-10 bg-[#F4F4F4] mt-[64px] md:mt-[72px]">
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

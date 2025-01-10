import { Link, NavLink, useNavigate } from "react-router-dom";
import HomeIcon from "../icons/HomeIcon";
import Box from "../icons/Box";
import TennisIcon from "../icons/TennisIcon";
import ShopIcon from "../icons/Shop";
import LogoutIcon from "../icons/LogoutIcon";
import { useContext } from "react";
import { UserContext } from "../../Context/FormContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <aside className="fixed inset-0 z-50 p-6 bg-white w-80">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-12">
          <div className="flex items-center h-12">
            <Link to="/">
              <h1>Pokemon Catcher</h1>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Menu text="Home" link="/" icon={HomeIcon} />
            <Menu
              text="Catch A Pokemon"
              link="/catchPokemon"
              icon={TennisIcon}
            />
            <Menu text="My Pokemon" link="/myPokemon" icon={Box} />
            <Menu text="Shop" link="/shop" icon={ShopIcon} />
          </div>
        </div>
        <div className="flex flex-col px-3 pt-4 border-t-2 border-gray-200 border-solid">
          <button
            onClick={handleLogout}
            className="flex gap-2 text-base font-semibold text-gray-500"
          >
            <LogoutIcon />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

const Menu = ({ text, icon: Icon, link }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive, isPending }) =>
        `flex p-3 cursor-pointer items-center gap-3 rounded-xl font-semibold hover:bg-[#EFEFEF] hover:text-black ${
          isActive ? "text-black bg-[#EFEFEF] shadow-button" : "text-gray-500"
        }`
      }
    >
      <Icon />
      {text}
    </NavLink>
  );
};
export default Sidebar;

import { Link, NavLink } from "react-router-dom";
import HomeIcon from "../icons/HomeIcon";
import Box from "../icons/Box";
import TennisIcon from "../icons/TennisIcon";
import ShopIcon from "../icons/Shop";

const Sidebar = () => {
  return (
    <aside className="fixed inset-0 z-50 p-6 bg-white w-80">
      <div className="flex items-center h-12 mb-12">
        <Link to="/">
          <h1>LOGO</h1>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Menu text="Home" link="/" icon={HomeIcon} />
        <Menu text="Catch A Pokemon" link="/catchPokemon" icon={TennisIcon} />
        <Menu text="My Pokemon" link="/myPokemon" icon={Box} />
        <Menu text="Shop" link="/shop" icon={ShopIcon} />
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

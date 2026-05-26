import { Link, NavLink, useNavigate } from "react-router-dom";
import HomeIcon from "../icons/HomeIcon";
import Box from "../icons/Box";
import TennisIcon from "../icons/TennisIcon";
import ShopIcon from "../icons/Shop";
import LogoutIcon from "../icons/LogoutIcon";
import { useContext } from "react";
import { UserContext } from "../../Context/FormContext";

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      {/* Mobile backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 p-6 bg-white w-72 md:w-80 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0`}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-12">
            <div className="flex items-center justify-between h-12">
              <Link to="/">
                <h1>Pokemon Catcher</h1>
              </Link>
              {/* Mobile close button */}
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
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
    </>
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

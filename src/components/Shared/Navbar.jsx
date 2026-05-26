import { useContext } from "react";
import Greatball from "../icons/Greatball";
import Masterball from "../icons/Masterball";
import Pokeball from "../icons/Pokeball";
import Wallet from "../icons/Wallet";
import { UserContext } from "../../Context/FormContext";

const Navbar = ({ onToggleSidebar }) => {
  const { user } = useContext(UserContext);
  const typeBall = user.pokeballs[0];
  return (
    <nav className="flex items-center z-30 justify-between md:justify-end w-full px-4 py-3 md:px-10 md:py-6 bg-white border-b border-[#F4F4F4] border-solid fixed top-0 left-0 right-0 md:left-80">
      {/* Hamburger button — mobile only */}
      <button
        onClick={onToggleSidebar}
        className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Stats indicators */}
      <div className="flex gap-3 md:gap-6 flex-wrap">
        <div className="flex gap-1 text-[#6F767E] items-center">
          <Pokeball />
          <p className="font-bold text-sm md:text-base text-[#6F767E]">
            {typeBall.pokeBall.quantity}
          </p>
        </div>
        <div className="flex gap-1 text-[#6F767E] items-center">
          <Greatball />
          <p className="font-bold text-sm md:text-base text-[#6F767E]">
            {typeBall.greatBall.quantity}
          </p>
        </div>
        <div className="flex gap-1 text-[#6F767E] items-center">
          <Masterball />
          <p className="font-bold text-sm md:text-base text-[#6F767E]">
            {typeBall.masterBall.quantity}
          </p>
        </div>
        <div className="flex gap-1 text-[#6F767E] items-center">
          <Wallet />
          <p className="font-bold text-sm md:text-base text-[#6F767E]">{user.coins}</p>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

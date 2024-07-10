import { useContext, useEffect } from "react";
import Greatball from "../icons/Greatball";
import HomeIcon from "../icons/HomeIcon";
import Masterball from "../icons/Masterball";
import Pokeball from "../icons/Pokeball";
import Wallet from "../icons/Wallet";
import { UserContext } from "../../Context/FormContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(UserContext);
  return (
    <nav className="flex items-center justify-end w-full px-10 py-6 bg-white border-l-2 border-[#F4F4F4] border-solid">
      <div className="flex gap-6">
        <div className="flex gap-6">
          <div className="flex gap-1 text-[#6F767E]">
            <Pokeball />
            <p className="font-bold text-base text-[#6F767E]">
              {user.pokeballs.pokeBall}
            </p>
          </div>
          <div className="flex gap-1 text-[#6F767E]">
            <Greatball />
            <p className="font-bold text-base text-[#6F767E]">
              {user.pokeballs.greatBall}
            </p>
          </div>
          <div className="flex gap-1 text-[#6F767E]">
            <Masterball />
            <p className="font-bold text-base text-[#6F767E]">
              {user.pokeballs.masterBall}
            </p>
          </div>
          <div className="flex gap-1 text-[#6F767E]">
            <Wallet />
            <p className="font-bold text-base text-[#6F767E]">{user.coins}</p>
          </div>
        </div>
        <HomeIcon />
      </div>
    </nav>
  );
};
export default Navbar;

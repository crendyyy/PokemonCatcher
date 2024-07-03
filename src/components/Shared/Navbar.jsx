import Greatball from "../icons/Greatball";
import HomeIcon from "../icons/HomeIcon";
import Masterball from "../icons/Masterball";
import Pokeball from "../icons/Pokeball";
import Wallet from "../icons/Wallet";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-end w-full px-10 py-6 bg-white border-l-2 border-[#F4F4F4] border-solid">
      <div className="flex gap-6">
        <div className="flex gap-6">
          <div className="flex gap-1 text-[#6F767E]">
            <Pokeball />
            <p className="font-bold text-base text-[#6F767E]">0</p>
          </div>
          <div className="flex gap-1 text-[#6F767E]">
            <Greatball />
            <p className="font-bold text-base text-[#6F767E]">0</p>
          </div>
          <div className="flex gap-1 text-[#6F767E]">
            <Masterball />
            <p className="font-bold text-base text-[#6F767E]">0</p>
          </div>
          <div className="flex gap-1 text-[#6F767E]">
            <Wallet />
            <p className="font-bold text-base text-[#6F767E]">0</p>
          </div>
        </div>
        <HomeIcon />
      </div>
    </nav>
  );
};
export default Navbar;

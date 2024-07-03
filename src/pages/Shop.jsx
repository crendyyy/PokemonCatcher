import { Link } from "react-router-dom";
import Greatball from "../components/icons/Greatball";
import Masterball from "../components/icons/Masterball";
import Pokeball from "../components/icons/Pokeball";
import Wallet from "../components/icons/Wallet";
import PokeballImg from "../assets/Pokeball.png";
import GreatBallImg from "../assets/GreatBall.png";
import MasterBallImg from "../assets/MasterBall.png";
import BackgroundHero from "../assets/BgShop.png";

const Shop = () => {
  return (
    <>
      <div className="relative w-full bg-white rounded-[20px] p-6 flex gap-10 flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col w-full gap-2">
            <span className="text-3xl font-semibold">The Pokemons Shop</span>
            <h2 className="text-gray-500">Welcome to Pokemon Shop</h2>
          </div>
          <div className="flex items-center gap-6">
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
        </div>
        <div className="w-full h-0.5 bg-gray-100"></div>
        <div className="flex w-full gap-6">
          <div className="flex flex-col w-full gap-4">
            <div className="flex justify-center w-full py-5 bg-red-400 h-52 rounded-2xl">
              <img src={PokeballImg} alt="" />
            </div>
            <div className="flex justify-between gap-10">
              <div className="flex flex-col gap-2">
                <span className="text-base font-semibold">Pokeball</span>
                <h4 className="text-gray-400">Mass-produced and reliable.</h4>
              </div>
              <div className="flex gap-2 px-2 py-1 bg-green-100 rounded-md h-fit">
                <Wallet />
                <span className="text-base font-bold">25</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-4">
            <div className="flex justify-center w-full py-5 bg-blue-400 h-52 rounded-2xl">
              <img src={GreatBallImg} alt="" />
            </div>
            <div className="flex justify-between gap-10">
              <div className="flex flex-col gap-2">
                <span className="text-base font-semibold">Great Ball</span>
                <h4 className="text-gray-400">
                  It lives by it’s name. ‘Great’ performance in the field.
                </h4>
              </div>
              <div className="flex gap-2 px-2 py-1 bg-green-100 rounded-md h-fit">
                <Wallet />
                <span className="text-base font-bold">25</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-4">
            <div className="flex justify-center w-full py-5 bg-purple-400 h-52 rounded-2xl">
              <img src={MasterBallImg} alt="" />
            </div>
            <div className="flex justify-between gap-10">
              <div className="flex flex-col gap-2">
                <span className="text-base font-semibold">Master Ball</span>
                <h4 className="text-gray-400">
                  No Pokemon can handle the power this Poke Ball has.
                </h4>
              </div>
              <div className="flex gap-2 px-2 py-1 bg-green-100 rounded-md h-fit">
                <Wallet />
                <span className="text-base font-bold">25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Shop;

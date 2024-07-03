import { Link } from "react-router-dom";
import Greatball from "../components/icons/Greatball";
import Masterball from "../components/icons/Masterball";
import Pokeball from "../components/icons/Pokeball";
import Wallet from "../components/icons/Wallet";

const MyPokemon = () => {
  return (
    <>
      <div className="relative w-full bg-white rounded-[20px] p-6 flex gap-10 flex-col">
        <div className="flex justify-start">
          <div className="flex flex-col w-full gap-2">
            <span className="text-3xl font-semibold">My Pokemons</span>
            <h2 className="text-gray-500">Here Your Pokemons</h2>
          </div>
        </div>
        <div className="w-full h-0.5 bg-gray-100"></div>
        <div className="flex justify-center w-full">
          <div className="flex flex-col items-center justify-center gap-8">
            <img className="w-full h-96 rounded-3xl" src="" alt="" />
            <div className="flex flex-col">
              <span className="text-3xl font-semibold text-center">
                You dont have any Pokemons
              </span>
              <h2 className="text-center text-gray-500">Go catch a Pokemons</h2>
            </div>
            <Link
              className="flex justify-center py-3 text-base font-bold text-white bg-blue-500 w-80 rounded-xl hover:bg-blue-400"
              to="/catchPokemon"
            >
              Catch a Pokemons
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyPokemon;

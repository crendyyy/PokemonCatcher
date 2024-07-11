import Greatball from "../components/icons/Greatball";
import Masterball from "../components/icons/Masterball";
import Pokeball from "../components/icons/Pokeball";
import PokeCardImg from "../assets/pokemonCard.png";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/FormContext";
import { getPokemonImage } from "../service/useGetPokemonImage";
import { getPokemonActualName } from "../service/useGetPokemonName";
import { getRandomPokemonId } from "../libs/utils";

const CatchPokemon = () => {
  const { user } = useContext(UserContext);
  const [searchPokemon, setSearchPokemon] = useState(null);
  const [actualName, setActualName] = useState("");
  const pokemonImage = getPokemonImage(searchPokemon);

  useEffect(() => {
    const fetchActualName = async () => {
      if (searchPokemon) {
        const name = await getPokemonActualName(searchPokemon);
        setActualName(name || "Unknown");
      }
    };
    fetchActualName();
  }, [searchPokemon]);

  const findPokemon = () => {
    const randomId = getRandomPokemonId();
    setSearchPokemon(randomId);
  };

  return (
    <div className="flex flex-col w-full gap-8 p-8 bg-white rounded-2xl">
      <div className="flex flex-col justify-start gap-2">
        <h1 className="!text-3xl">Catch Pokemon</h1>
        <h2 className="text-gray-400">Good luck mate</h2>
      </div>
      <div className="flex items-start justify-between gap-16 px-6">
        <div className="flex flex-col w-3/5 gap-6">
          <h2>Chose Your Pokeball</h2>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 border-2 border-gray-200 border-solid hover:border-blue-500 rounded-xl">
              <div className="flex justify-start w-full gap-3 p-4">
                <Pokeball />
                <div className="flex flex-col">
                  <p className="text-xs font-medium text-gray-400">
                    {user.pokeballs.pokeBall} Left
                  </p>
                  <p className="text-base font-semibold">Poke Ball</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 border-2 border-gray-200 border-solid hover:border-blue-500 rounded-xl">
              <div className="flex justify-start w-full gap-3 p-4">
                <Greatball />
                <div className="flex flex-col">
                  <p className="text-xs font-medium text-gray-400">
                    {user.pokeballs.greatBall} Left
                  </p>
                  <p className="text-base font-semibold">Great Ball</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 border-2 border-gray-200 border-solid hover:border-blue-500 rounded-xl">
              <div className="flex justify-start w-full gap-3 p-4">
                <Masterball />
                <div className="flex flex-col">
                  <p className="text-xs font-medium text-gray-400">
                    {user.pokeballs.masterBall} Left
                  </p>
                  <p className="text-base font-semibold">Master Ball</p>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full py-3 text-sm font-bold text-white bg-blue-500 rounded-xl hover:bg-blue-400">
            Catch a Pokemon
          </button>
        </div>
        <div className="flex flex-col w-2/5 gap-2">
          <img src={PokeCardImg} alt="" />
          <button className="w-full py-3 text-sm font-bold text-white bg-blue-500 rounded-xl hover:bg-blue-400">
            Search Pokemon
          </button>
        </div>
      </div>
    </div>
  );
};
export default CatchPokemon;

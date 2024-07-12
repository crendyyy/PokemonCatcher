import Greatball from "../components/icons/Greatball";
import Masterball from "../components/icons/Masterball";
import Pokeball from "../components/icons/Pokeball";
import PokeCardImg from "../assets/pokemonCard.png";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/FormContext";
import { getPokemonImage } from "../service/useGetPokemonImage";
import { getPokemonActualName } from "../service/useGetPokemonName";
import {
  calculateCatchProbability,
  getGroupFromId,
  getRandomPokemonId,
} from "../libs/utils";

const CatchPokemon = () => {
  const { user, setUser } = useContext(UserContext);
  const [searchPokemon, setSearchPokemon] = useState(null);
  const [isCaught, setIsCaught] = useState(null);
  const [actualName, setActualName] = useState("");
  const [nickname, setNickname] = useState("");
  const [pokeballs, setPokeballs] = useState("");
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
    setIsCaught(null);
  };

  const catchPokemon = (pokeballType) => {
    const groupId = getGroupFromId(searchPokemon);
    const catchProbality = calculateCatchProbability(groupId, pokeballType);

    const randomValue = Math.random();
    const isCaughtPokemon = randomValue <= catchProbality;

    console.log(randomValue);
    console.log(catchProbality);
    console.log(isCaughtPokemon);

    if (isCaughtPokemon) {
      setIsCaught(true);
    } else {
      setIsCaught(false);
    }

    if (pokeballType === "PokeBall") {
      if (user.pokeballs.pokeBall >= 1) {
        setUser({
          ...user,
          pokeballs: {
            ...user.pokeballs,
            pokeBall: user.pokeballs.pokeBall - 1,
          },
        });
      } else {
        setIsCaught(null);
        alert("Not enough Pokeball");
      }
    } else if (pokeballType === "GreatBall") {
      if (user.pokeballs.greatBall >= 1) {
        setUser({
          ...user,
          pokeballs: {
            ...user.pokeballs,
            greatBall: user.pokeballs.greatBall - 1,
          },
        });
      } else {
        setIsCaught(null);
        alert("Not enough Great Ball");
      }
    } else if (pokeballType === "MasterBall") {
      if (user.pokeballs.masterBall >= 1) {
        setUser({
          ...user,
          pokeballs: {
            ...user.pokeballs,
            masterBall: user.pokeballs.masterBall - 1,
          },
        });
      } else {
        setIsCaught(null);
        alert("Not enough Master Ball");
      }
    } else if (pokeballType === "") {
      alert("Please Select Pokeball");
    }
  };

  const typeBall = (pokeballsType) => {
    setPokeballs((prev) => (prev === pokeballsType ? "" : pokeballsType));
  };
  console.log(pokeballs);

  return (
    <div className="flex flex-col w-full gap-10 p-8 bg-white rounded-2xl">
      <div className="flex flex-col justify-start gap-2">
        <h1 className="!text-3xl">Catch Pokemon</h1>
        <h2 className="text-gray-400">Good luck mate</h2>
      </div>
      <div className="w-full h-0.5 bg-gray-100"></div>
      <div className="flex items-start justify-between gap-16 px-6">
        {!searchPokemon ? (
          <div className="flex justify-center w-full">
            <div className="flex flex-col gap-2">
              <img src={PokeCardImg} alt="" />
              <button
                onClick={findPokemon}
                className="w-full py-3 text-sm font-bold text-white bg-blue-500 rounded-xl hover:bg-blue-400"
              >
                Search Pokemon
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col w-3/5 gap-6 h-fit">
              <h2>Chose Your Pokeball</h2>
              <div className="flex flex-col gap-2">
                <div
                  onClick={() => typeBall("PokeBall")}
                  className={`flex flex-col gap-2 border-2 ${
                    pokeballs === "PokeBall"
                      ? "border-blue-500"
                      : "border-gray-200"
                  } border-solid rounded-xl`}
                >
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
                <div
                  onClick={() => typeBall("GreatBall")}
                  className={`flex flex-col gap-2 border-2 ${
                    pokeballs === "GreatBall"
                      ? "border-blue-500"
                      : "border-gray-200"
                  } border-solid rounded-xl`}
                >
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
                <div
                  onClick={() => typeBall("MasterBall")}
                  className={`flex flex-col gap-2 border-2 ${
                    pokeballs === "MasterBall"
                      ? "border-blue-500"
                      : "border-gray-200"
                  } border-solid rounded-xl`}
                >
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
              <button
                onClick={() => catchPokemon(pokeballs)}
                className="w-full py-3 text-sm font-bold text-white bg-blue-500 rounded-xl hover:bg-blue-400"
              >
                Catch a Pokemon
              </button>
            </div>
            <div className="h-96">
              <div className="flex flex-col h-full gap-2">
                <img src={pokemonImage} alt="" />
                <div className="flex flex-col justify-center">
                  <span className="text-4xl font-semibold text-center">
                    You Found A Pokemon!
                  </span>
                  <span className="text-xl text-center">
                    Go Catch A {""}
                    <span className="text-xl font-bold">{actualName}</span>
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default CatchPokemon;

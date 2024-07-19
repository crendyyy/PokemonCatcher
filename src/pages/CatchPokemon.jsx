import Greatball from "../components/icons/Greatball";
import Masterball from "../components/icons/Masterball";
import Pokeball from "../components/icons/Pokeball";
import PokeCardImg from "../assets/pokemonCard.png";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/FormContext";
import { getPokemonImage } from "../service/useGetPokemonImage";
import { useGetPokemon } from "../service/useGetPokemonName";
import {
  calculateCatchProbability,
  getGroupFromId,
  getRandomPokemonId,
} from "../libs/utils";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../libs/FormatDate";

const CatchPokemon = () => {
  const { user, setUser } = useContext(UserContext);
  const [searchPokemon, setSearchPokemon] = useState(null);
  const [isCaught, setIsCaught] = useState(null);
  const [actualName, setActualName] = useState("");
  const [nickname, setNickname] = useState("");
  const [pokeballs, setPokeballs] = useState("");

  const navigate = useNavigate();

  const ball = user.pokeballs[0];

  const pokemonImage = getPokemonImage(searchPokemon);
  const { data: pokemon, isLoading, isError } = useGetPokemon(searchPokemon);

  useEffect(() => {
    if (pokemon) {
      setActualName(pokemon.name || "Unknown");
    }
  }, [pokemon]);
  console.log(pokemon);
  console.log(searchPokemon);

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
    setPokeballs("");

    if (pokeballType === "PokeBall") {
      if (ball.pokeBall.quantity >= 1) {
        setUser({
          ...user,
          pokeballs: [
            {
              ...ball,
              pokeBall: {
                ...ball.pokeBall,
                quantity: ball.pokeBall.quantity - 1,
              },
            },
          ],
        });
      } else {
        setIsCaught(null);
        alert("Not enough Pokeball");
      }
    } else if (pokeballType === "GreatBall") {
      if (ball.greatBall.quantity >= 1) {
        setUser({
          ...user,
          pokeballs: [
            {
              ...ball,
              greatBall: {
                ...ball.greatBall,
                quantity: ball.greatBall.quantity - 1,
              },
            },
          ],
        });
      } else {
        setIsCaught(null);
        alert("Not enough Great Ball");
      }
    } else if (pokeballType === "MasterBall") {
      if (ball.masterBall.quantity >= 1) {
        setUser({
          ...user,
          pokeballs: [
            {
              ...ball,
              masterBall: {
                ...ball.masterBall,
                quantity: ball.masterBall.quantity - 1,
              },
            },
          ],
        });
      } else {
        setIsCaught(null);
        alert("Not enough Master Ball");
      }
    } else if (pokeballType === "") {
      setIsCaught(null);
      alert("Please Select Pokeball");
    }
  };

  const typeBall = (pokeballsType) => {
    setPokeballs((prev) => (prev === pokeballsType ? "" : pokeballsType));
  };
  const savePokemon = () => {
    if (nickname.trim() === "") {
      alert("Please enter a nickname");
    } else {
      const date = new Date();
      const caughtPokemon = {
        uid: Date.now(),
        id: searchPokemon,
        name: actualName,
        nickname: nickname,
        image: pokemonImage,
        dateCaught: formatDate(date),
      };
      setUser({
        ...user,
        pokemons: [...user.pokemons, caughtPokemon],
      });
      navigate("/myPokemon");
    }
  };

  return (
    <div className="flex flex-col w-full gap-10 p-8 bg-white rounded-2xl">
      <div className="flex flex-col justify-start gap-2">
        <h1 className="!text-3xl">Catch Pokemon</h1>
        <h2 className="text-gray-400">Good luck mate</h2>
      </div>
      <div className="w-full h-0.5 bg-gray-100"></div>
      <div className="flex items-start justify-between gap-16 px-6">
        {isLoading ? (
          <p>Loading..</p>
        ) : (
          <>
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
                {isCaught === null && (
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
                          } border-solid rounded-xl ${
                            ball.pokeBall.quantity === 0
                              ? "opacity-40 pointer-events-none"
                              : ""
                          }`}
                        >
                          <div className="flex justify-start w-full gap-3 p-4">
                            <Pokeball />
                            <div className="flex flex-col">
                              <p className="text-xs font-medium text-gray-400">
                                {ball.pokeBall.quantity} Left
                              </p>
                              <p className="text-base font-semibold">
                                {ball.pokeBall.label}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          onClick={() => typeBall("GreatBall")}
                          className={`flex flex-col gap-2 border-2 ${
                            pokeballs === "GreatBall"
                              ? "border-blue-500"
                              : "border-gray-200"
                          } border-solid rounded-xl ${
                            ball.greatBall.quantity === 0
                              ? "opacity-40 pointer-events-none"
                              : ""
                          }`}
                        >
                          <div className="flex justify-start w-full gap-3 p-4">
                            <Greatball />
                            <div className="flex flex-col">
                              <p className="text-xs font-medium text-gray-400">
                                {ball.greatBall.quantity} Left
                              </p>
                              <p className="text-base font-semibold">
                                {ball.greatBall.label}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          onClick={() => typeBall("MasterBall")}
                          className={`flex flex-col gap-2 border-2 ${
                            pokeballs === "MasterBall"
                              ? "border-blue-500"
                              : "border-gray-200"
                          } border-solid rounded-xl  ${
                            ball.masterBall.quantity === 0
                              ? "opacity-40 pointer-events-none"
                              : ""
                          }`}
                        >
                          <div className="flex justify-start w-full gap-3 p-4">
                            <Masterball />
                            <div className="flex flex-col">
                              <p className="text-xs font-medium text-gray-400">
                                {ball.masterBall.quantity} Left
                              </p>
                              <p className="text-base font-semibold">
                                {ball.masterBall.label}
                              </p>
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
                            <span className="text-xl font-bold">
                              {actualName}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {isCaught && (
                  <>
                    <div className="flex justify-center w-full py-12">
                      <div className="flex flex-col items-center justify-center h-full gap-4 w-96">
                        <img src={pokemonImage} alt="" className="h-52 w-52" />
                        <div className="flex flex-col justify-center gap-2">
                          <span className="text-4xl font-semibold text-center">
                            Congrats!
                          </span>
                          <span className="text-xl text-center">
                            You've found a {""}
                            <span className="text-xl font-bold">
                              {actualName}
                            </span>
                          </span>
                        </div>
                        <div className="flex flex-col w-full gap-4">
                          <span className="text-base font-semibold">
                            Nickname
                          </span>
                          <input
                            type="text"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            className="w-full p-3 text-base font-semibold text-gray-600 bg-gray-100 rounded-xl"
                          />
                          <button
                            onClick={savePokemon}
                            className="py-3 text-sm font-bold text-white bg-blue-500 w-f\ rounded-xl hover:bg-blue-400"
                          >
                            Save Pokemon
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {isCaught === false && (
                  <>
                    <div className="flex justify-center w-full py-12">
                      <div className="flex flex-col items-center justify-center h-full gap-4">
                        <img src={pokemonImage} alt="" className="h-52 w-52" />
                        <div className="flex flex-col justify-center gap-2">
                          <span className="text-4xl font-semibold text-center">
                            Ahh, Shit!
                          </span>
                          <span className="text-xl text-center">
                            A {""}
                            <span className="text-xl font-bold">
                              {actualName}
                            </span>
                            {""} has slipped away from your Poke Ball.
                          </span>
                        </div>
                        <button
                          onClick={findPokemon}
                          className="w-full py-3 text-sm font-bold text-white bg-blue-500 rounded-xl hover:bg-blue-400"
                        >
                          Catch another Pokemon
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default CatchPokemon;

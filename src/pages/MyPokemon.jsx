import { Link } from "react-router-dom";
import PokeballImg from "../assets/PokeballBg.png";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/FormContext";
import useDialog from "../hooks/useDialog";
import ReleaseDialog from "../components/dialog/ReleaseDialog";

const MyPokemon = () => {
  const { user, setUser } = useContext(UserContext);
  const [pokemons, setPokemons] = useState([]);
  const { isDialogOpen, openDialog, closeDialog } = useDialog();
  const [selectPokemon, setSelectPokemon] = useState(null);

  useEffect(() => {
    const fetchActualName = async () => {
      const pokemon = await Promise.all(
        user.pokemons.map(async (pokemon) => {
          return { ...pokemon };
        })
      );
      setPokemons(pokemon);
    };
    fetchActualName();
  }, [user.pokemons]);
  console.log(pokemons);

  const handleReleasePokemon = (uid) => {
    const updatedPokemons = user.pokemons.filter(
      (pokemon) => pokemon.uid !== uid
    );
    setUser({ ...user, pokemons: updatedPokemons });
    closeDialog();
  };

  const handleSelectPokemon = (pokemonId) => {
    const selected = pokemons.find((pokemon) => pokemon.uid === pokemonId);
    setSelectPokemon(selected);
    console.log(selected);
    openDialog();
  };

  return (
    <div className="relative w-full bg-white rounded-[20px] p-6 flex gap-10 flex-col">
      {isDialogOpen && (
        <ReleaseDialog
          onClose={closeDialog}
          onSubmit={() => handleReleasePokemon(selectPokemon.uid)}
          nickname={selectPokemon.nickname}
        />
      )}
      <div className="flex justify-start">
        <div className="flex flex-col w-full gap-2">
          <span className="text-3xl font-semibold">My Pokemons</span>
          <h2 className="text-gray-500">Here Your Pokemons</h2>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-100"></div>
      <div className="flex justify-center w-full">
        {pokemons.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-8">
            <img className="w-full h-96 rounded-3xl" src={PokeballImg} alt="" />
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
        ) : (
          <div className="grid w-full grid-cols-3 gap-8">
            {pokemons.map((pokemon) => (
              <div key={pokemon.uid} className="flex flex-col w-full gap-4">
                <div className="flex items-center justify-center w-full bg-gray-100 h-52 rounded-3xl">
                  <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="w-52 h-52"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-semibold">
                        {pokemon.nickname}
                      </span>
                      <span className="text-base font-semibold">
                        {pokemon.name}
                      </span>
                    </div>
                    <button
                      onClick={() => handleSelectPokemon(pokemon.uid)}
                      className="flex items-center h-12 px-5 text-base font-bold text-white bg-[#FF442A] hover:bg-red-600 rounded-xl"
                    >
                      Release
                    </button>
                  </div>
                  <span className="text-sm font-semibold text-gray-500">
                    Catched on {""}
                    {pokemon.dateCaught}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default MyPokemon;

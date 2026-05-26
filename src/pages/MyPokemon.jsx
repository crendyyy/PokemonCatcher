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
        user.pokemons.map(async (p) => ({ ...p }))
      );
      setPokemons(pokemon);
    };
    fetchActualName();
  }, [user.pokemons]);

  const handleReleasePokemon = (uid) => {
    const updatedPokemons = user.pokemons.filter((p) => p.uid !== uid);
    setUser({ ...user, pokemons: updatedPokemons });
    closeDialog();
  };

  const handleSelectPokemon = (pokemonId) => {
    const selected = pokemons.find((p) => p.uid === pokemonId);
    setSelectPokemon(selected);
    openDialog();
  };

  return (
    <div className="relative w-full bg-white rounded-[20px] p-4 md:p-6 flex gap-6 md:gap-10 flex-col">
      {isDialogOpen && (
        <ReleaseDialog
          onClose={closeDialog}
          onSubmit={() => handleReleasePokemon(selectPokemon.uid)}
          nickname={selectPokemon.nickname}
        />
      )}
      <div className="flex justify-start">
        <div className="flex flex-col w-full gap-2">
          <span className="text-2xl md:text-3xl font-semibold">My Pokemons</span>
          <h2 className="text-gray-500">Here Your Pokemons</h2>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-100"></div>
      <div className="flex justify-center w-full">
        {pokemons.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-6 md:gap-8 w-full">
            <img className="w-full max-w-lg h-auto rounded-3xl object-cover" src={PokeballImg} alt="" />
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-semibold text-center">You dont have any Pokemons</span>
              <h2 className="text-center text-gray-500">Go catch a Pokemons</h2>
            </div>
            <Link className="flex justify-center py-3 text-base font-bold text-white bg-blue-500 w-full max-w-xs rounded-xl hover:bg-blue-400" to="/catchPokemon">
              Catch a Pokemons
            </Link>
          </div>
        ) : (
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {pokemons.map((p) => (
              <div key={p.uid} className="flex flex-col w-full gap-3">
                <div className="flex items-center justify-center w-full bg-gray-100 h-40 md:h-52 rounded-2xl">
                  <img src={p.image} alt={p.name} className="w-36 h-36 md:w-52 md:h-52 object-contain" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex flex-col min-w-0">
                      <span className="text-xl md:text-2xl font-semibold truncate">{p.nickname}</span>
                      <span className="text-sm md:text-base font-semibold">{p.name}</span>
                    </div>
                    <button onClick={() => handleSelectPokemon(p.uid)} className="flex items-center shrink-0 h-10 md:h-12 px-3 md:px-5 text-sm font-bold text-white bg-[#FF442A] hover:bg-red-600 rounded-xl">
                      Release
                    </button>
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-gray-500">Catched on {p.dateCaught}</span>
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

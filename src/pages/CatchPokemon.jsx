import Greatball from "../components/icons/Greatball";
import Masterball from "../components/icons/Masterball";
import Pokeball from "../components/icons/Pokeball";
import PokeCardImg from "../assets/pokemonCard.png";

const CatchPokemon = () => {
  return (
    <div className="flex flex-col w-full gap-8 p-8 bg-white rounded-2xl">
      <div className="flex flex-col justify-start gap-2">
        <h1 className="!text-3xl">Catch Pokemon</h1>
        <h2 className="text-gray-400">Good luck mate</h2>
      </div>
      <div className="flex justify-between gap-16 px-6">
        <div className="flex flex-col w-full gap-6">
          <h2>Chose Your Pokeball</h2>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 border-2 border-gray-200 border-solid hover:border-blue-500 rounded-xl">
              <div className="flex justify-start w-full gap-3 p-4">
                <Pokeball />
                <div className="flex flex-col">
                  <p className="text-xs font-medium text-gray-400">5 Left</p>
                  <p className="text-base font-semibold">Poke Ball</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 border-2 border-gray-200 border-solid hover:border-blue-500 rounded-xl">
              <div className="flex justify-start w-full gap-3 p-4">
                <Greatball />
                <div className="flex flex-col">
                  <p className="text-xs font-medium text-gray-400">5 Left</p>
                  <p className="text-base font-semibold">Great Ball</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 border-2 border-gray-200 border-solid hover:border-blue-500 rounded-xl">
              <div className="flex justify-start w-full gap-3 p-4">
                <Masterball />
                <div className="flex flex-col">
                  <p className="text-xs font-medium text-gray-400">5 Left</p>
                  <p className="text-base font-semibold">Master Ball</p>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full py-3 text-sm font-bold text-white bg-blue-500 rounded-xl hover:bg-blue-400">
            Catch a Pokemon
          </button>
        </div>
        <img src={PokeCardImg} alt="" className="w-96 h-96 rounded-2xl" />
      </div>
    </div>
  );
};
export default CatchPokemon;

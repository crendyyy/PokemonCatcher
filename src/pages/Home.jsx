import { Link } from "react-router-dom";
import Pokeball from "../components/icons/Pokeball";
import Activity from "../components/icons/Activity";
import ShoppingBag from "../components/icons/ShoppingBag";
import CardIcon from "../components/icons/CardIcon";
import { useContext } from "react";
import { UserContext } from "../Context/FormContext";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <h1 className="!text-2xl md:!text-[40px] leading-tight">
        Welcome To Pokemon Catching Game {user.userName}
      </h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 md:p-6 bg-white rounded-2xl md:rounded-3xl">
          <h2 className="!font-semibold">Start your Journey!!</h2>
          <Link
            to="/catchPokemon"
            className="px-5 py-3 md:py-4 text-sm font-bold text-white text-center bg-blue-500 hover:bg-blue-400 rounded-xl"
          >
            Catch Pokemon
          </Link>
        </div>
        <div className="p-4 md:p-6 flex flex-col gap-6 md:gap-8 rounded-[20px] bg-white">
          <div className="flex gap-4">
            <div className="w-4 h-8 bg-blue-100 rounded"></div>
            <h2>Overview</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex flex-col w-full gap-3 md:gap-4 p-4 bg-green-100 rounded-xl">
              <Activity />
              <div className="flex flex-col gap-1">
                <p className="text-sm md:text-base font-semibold">Pokemon Catched</p>
                <h1 className="!text-3xl md:!text-5xl">{user.pokemons.length}</h1>
              </div>
            </div>
            <div className="flex flex-col w-full gap-3 md:gap-4 p-4 bg-blue-100 rounded-xl">
              <ShoppingBag />
              <div className="flex flex-col gap-1">
                <p className="text-sm md:text-base font-semibold">Catch Attempts</p>
                <h1 className="!text-3xl md:!text-5xl">{user.attempt}</h1>
              </div>
            </div>
            <div className="flex flex-col w-full gap-3 md:gap-4 p-4 bg-purple-100 rounded-xl">
              <CardIcon />
              <div className="flex flex-col gap-1">
                <p className="text-sm md:text-base font-semibold">Coins</p>
                <h1 className="!text-3xl md:!text-5xl">{user.coins}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

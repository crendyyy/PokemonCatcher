import { Link, useNavigate } from "react-router-dom";
import Pokeball from "../components/icons/Pokeball";
import Activity from "../components/icons/Activity";
import ShoppingBag from "../components/icons/ShoppingBag";
import CardIcon from "../components/icons/CardIcon";
import { useContext, useEffect } from "react";
import { UserContext } from "../Context/FormContext";
const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-col gap-6">
      <h1 className="!text-[40px]">
        Welcome To Pokemon Catching Game {user.userName}
      </h1>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between p-6 bg-white rounded-3xl">
          <h2 className="!font-semibold">Start your Journey!!</h2>
          <Link
            to="/catchPokemon"
            className="px-5 py-4 text-sm font-bold text-white bg-blue-500 hover:bg-blue-400 rounded-xl"
          >
            Catch Pokemon
          </Link>
        </div>
        <div className="p-6 flex flex-col gap-8 rounded-[20px] bg-white">
          <div className="flex gap-4">
            <div className="w-4 h-8 bg-blue-100 rounded"></div>
            <h2>Overview</h2>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col w-full gap-4 p-4 bg-green-100 rounded-xl">
              <Activity />
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold">Pokemon Catched</p>
                <h1 className="!text-5xl">{user.pokemons.length}</h1>
              </div>
            </div>
            <div className="flex flex-col w-full gap-4 p-4 bg-blue-100 rounded-xl">
              <ShoppingBag />
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold">Catch Attempts</p>
                <h1 className="!text-5xl">12</h1>
              </div>
            </div>
            <div className="flex flex-col w-full gap-4 p-4 bg-purple-100 rounded-xl">
              <CardIcon />
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold">Coins</p>
                <h1 className="!text-5xl">{user.coins}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

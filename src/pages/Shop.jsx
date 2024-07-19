import { Link } from "react-router-dom";
import Greatball from "../components/icons/Greatball";
import Masterball from "../components/icons/Masterball";
import Pokeball from "../components/icons/Pokeball";
import Wallet from "../components/icons/Wallet";
import PokeballImg from "../assets/Pokeball.png";
import GreatBallImg from "../assets/GreatBall.png";
import MasterBallImg from "../assets/MasterBall.png";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/FormContext";
import useDialog from "../hooks/useDialog";
import CheckoutDialog from "../components/dialog/CheckoutDialog";

const Shop = () => {
  const { user, setUser } = useContext(UserContext);
  const { isDialogOpen, openDialog, closeDialog } = useDialog();
  const [selectBall, setSelectBall] = useState(null);
  const [totalBall, setTotalBall] = useState(0);
  const [totalCoint, setTotalCoint] = useState(0);

  const ball = user.pokeballs[0];

  const handleSelectBall = (typeBall) => {
    const selected = ball[typeBall].label;
    setSelectBall(selected);

    openDialog();
  };
  console.log(totalCoint);

  const buyPokeBall = () => {
    if (user.coins >= totalBall * 50) {
      setUser({
        ...user,
        coins: user.coins - totalBall * 50,
        pokeballs: [
          {
            ...ball,
            pokeBall: {
              ...ball.pokeBall,
              quantity: ball.pokeBall.quantity + totalBall,
            },
          },
        ],
      });
      setTotalCoint(0);
      closeDialog();
      setTotalBall(0);
    } else {
      setTotalCoint(0);
      closeDialog();
      setTotalBall(0);
      alert("Insufficient coins to purchase Poke Ball.");
    }
  };

  const buyGreatBall = () => {
    if (user.coins >= totalBall * 100) {
      setUser({
        ...user,
        coins: user.coins - totalBall * 100,
        pokeballs: [
          {
            ...ball,
            greatBall: {
              ...ball.greatBall,
              quantity: ball.greatBall.quantity + totalBall,
            },
          },
        ],
      });
      setTotalCoint(0);
      closeDialog();
      setTotalBall(0);
    } else {
      setTotalCoint(0);
      closeDialog();
      setTotalBall(0);
      alert("Insufficient coins to purchase Poke Ball.");
    }
  };

  const buyMasterBall = () => {
    if (user.coins >= totalBall * 500) {
      setUser({
        ...user,
        coins: user.coins - totalBall * 500,
        pokeballs: [
          {
            ...ball,
            masterBall: {
              ...ball.masterBall,
              quantity: ball.masterBall.quantity + totalBall,
            },
          },
        ],
      });
      setTotalCoint(0);
      closeDialog();
      setTotalBall(0);
    } else {
      closeDialog();
      setTotalCoint(0);
      setTotalBall(0);
      alert("Insufficient coins to purchase Poke Ball.");
    }
  };

  const buyBall =
    selectBall === "Poke Ball"
      ? buyPokeBall
      : selectBall === "Great Ball"
      ? buyGreatBall
      : selectBall === "Master Ball"
      ? buyMasterBall
      : "";

  const totalCost = () => {
    selectBall === "Poke Ball"
      ? setTotalCoint(totalBall * 50)
      : selectBall === "Great Ball"
      ? setTotalCoint(totalBall * 100)
      : selectBall === "Master Ball"
      ? setTotalCoint(totalBall * 500)
      : "";
  };

  const handleClose = () => {
    setTotalCoint(0);
    setTotalBall(0);
    closeDialog();
  };

  return (
    <>
      {isDialogOpen && (
        <CheckoutDialog
          onClose={handleClose}
          onSubmit={buyBall}
          typeball={selectBall}
          value={totalBall}
          totalCoin={totalCoint}
          onConfirm={totalCost}
          setValue={(e) => setTotalBall(Number(e.target.value))}
        />
      )}
      <div className="relative w-full bg-white rounded-[20px] p-6 flex gap-10 flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col w-full gap-2">
            <span className="text-3xl font-semibold">The Pokemons Shop</span>
            <h2 className="text-gray-500">Welcome to Pokemon Shop</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-1 text-[#6F767E]">
              <Pokeball />
              <p className="font-bold text-base text-[#6F767E]">
                {ball.pokeBall.quantity}
              </p>
            </div>
            <div className="flex gap-1 text-[#6F767E]">
              <Greatball />
              <p className="font-bold text-base text-[#6F767E]">
                {ball.greatBall.quantity}
              </p>
            </div>
            <div className="flex gap-1 text-[#6F767E]">
              <Masterball />
              <p className="font-bold text-base text-[#6F767E]">
                {ball.masterBall.quantity}
              </p>
            </div>
            <div className="flex gap-1 text-[#6F767E]">
              <Wallet />
              <p className="font-bold text-base text-[#6F767E]">{user.coins}</p>
            </div>
          </div>
        </div>
        <div className="w-full h-0.5 bg-gray-100"></div>
        <div className="flex w-full gap-6">
          <div
            onClick={() => handleSelectBall("pokeBall")}
            className="flex flex-col w-full gap-4 hover:brightness-90 rounded-2xl"
          >
            <div className="flex justify-center w-full py-5 bg-red-400 h-52 rounded-2xl">
              <img src={PokeballImg} alt="" />
            </div>
            <div className="flex justify-between gap-10">
              <div className="flex flex-col gap-2">
                <span className="text-base font-semibold">Poke Ball</span>
                <h4 className="text-gray-400">Mass-produced and reliable.</h4>
              </div>
              <div className="flex gap-2 px-2 py-1 bg-green-100 rounded-md h-fit">
                <Wallet />
                <span className="text-base font-bold">50</span>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleSelectBall("greatBall")}
            className="flex flex-col w-full gap-4 hover:brightness-90 rounded-2xl"
          >
            <div className="flex justify-center w-full py-5 bg-blue-400 h-52 rounded-2xl">
              <img src={GreatBallImg} alt="" />
            </div>
            <div className="flex justify-between gap-10">
              <div className="flex flex-col gap-2">
                <span className="text-base font-semibold">Great Ball</span>
                <h4 className="text-gray-400">
                  It lives by it's name. 'Great' performance in the field.
                </h4>
              </div>
              <div className="flex gap-2 px-2 py-1 bg-green-100 rounded-md h-fit">
                <Wallet />
                <span className="text-base font-bold">100</span>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleSelectBall("masterBall")}
            className="flex flex-col w-full gap-4 hover:brightness-90 rounded-2xl"
          >
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
                <span className="text-base font-bold">500</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Shop;

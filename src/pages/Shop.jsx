import { Link } from "react-router-dom";
import Greatball from "../components/icons/Greatball";
import Masterball from "../components/icons/Masterball";
import Pokeball from "../components/icons/Pokeball";
import Wallet from "../components/icons/Wallet";
import PokeballImg from "../assets/Pokeball.png";
import GreatBallImg from "../assets/GreatBall.png";
import MasterBallImg from "../assets/MasterBall.png";
import { useContext, useState } from "react";
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
    setSelectBall(ball[typeBall].label);
    openDialog();
  };

  const buyPokeBall = () => {
    if (user.coins >= totalBall * 50) {
      setUser({ ...user, coins: user.coins - totalBall * 50, pokeballs: [{ ...ball, pokeBall: { ...ball.pokeBall, quantity: ball.pokeBall.quantity + totalBall } }] });
      setTotalCoint(0); closeDialog(); setTotalBall(0);
    } else { setTotalCoint(0); closeDialog(); setTotalBall(0); alert("Insufficient coins to purchase Poke Ball."); }
  };

  const buyGreatBall = () => {
    if (user.coins >= totalBall * 100) {
      setUser({ ...user, coins: user.coins - totalBall * 100, pokeballs: [{ ...ball, greatBall: { ...ball.greatBall, quantity: ball.greatBall.quantity + totalBall } }] });
      setTotalCoint(0); closeDialog(); setTotalBall(0);
    } else { setTotalCoint(0); closeDialog(); setTotalBall(0); alert("Insufficient coins to purchase Poke Ball."); }
  };

  const buyMasterBall = () => {
    if (user.coins >= totalBall * 500) {
      setUser({ ...user, coins: user.coins - totalBall * 500, pokeballs: [{ ...ball, masterBall: { ...ball.masterBall, quantity: ball.masterBall.quantity + totalBall } }] });
      setTotalCoint(0); closeDialog(); setTotalBall(0);
    } else { closeDialog(); setTotalCoint(0); setTotalBall(0); alert("Insufficient coins to purchase Poke Ball."); }
  };

  const buyBall = selectBall === "Poke Ball" ? buyPokeBall : selectBall === "Great Ball" ? buyGreatBall : selectBall === "Master Ball" ? buyMasterBall : "";

  const totalCost = () => {
    selectBall === "Poke Ball" ? setTotalCoint(totalBall * 50) : selectBall === "Great Ball" ? setTotalCoint(totalBall * 100) : selectBall === "Master Ball" ? setTotalCoint(totalBall * 500) : "";
  };

  const handleClose = () => { setTotalCoint(0); setTotalBall(0); closeDialog(); };

  return (
    <>
      {isDialogOpen && (
        <CheckoutDialog onClose={handleClose} onSubmit={buyBall} typeball={selectBall} value={totalBall} totalCoin={totalCoint} onConfirm={totalCost} setValue={(e) => setTotalBall(Number(e.target.value))} />
      )}
      <div className="relative w-full bg-white rounded-[20px] p-4 md:p-6 flex gap-6 md:gap-10 flex-col">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex flex-col w-full gap-2">
            <span className="text-2xl md:text-3xl font-semibold">The Pokemons Shop</span>
            <h2 className="text-gray-500">Welcome to Pokemon Shop</h2>
          </div>
          <div className="flex items-center gap-3 md:gap-6 flex-wrap">
            <div className="flex gap-1 text-[#6F767E]">
              <Pokeball />
              <p className="font-bold text-sm md:text-base text-[#6F767E]">{ball.pokeBall.quantity}</p>
            </div>
            <div className="flex gap-1 text-[#6F767E]">
              <Greatball />
              <p className="font-bold text-sm md:text-base text-[#6F767E]">{ball.greatBall.quantity}</p>
            </div>
            <div className="flex gap-1 text-[#6F767E]">
              <Masterball />
              <p className="font-bold text-sm md:text-base text-[#6F767E]">{ball.masterBall.quantity}</p>
            </div>
            <div className="flex gap-1 text-[#6F767E]">
              <Wallet />
              <p className="font-bold text-sm md:text-base text-[#6F767E]">{user.coins}</p>
            </div>
          </div>
        </div>
        <div className="w-full h-0.5 bg-gray-100"></div>
        <div className="flex flex-col sm:flex-row w-full gap-4 md:gap-6">
          {/* Poke Ball */}
          <div onClick={() => handleSelectBall("pokeBall")} className="flex flex-col w-full gap-3 md:gap-4 hover:brightness-90 rounded-2xl cursor-pointer">
            <div className="flex justify-center w-full py-5 bg-red-400 h-40 md:h-52 rounded-2xl">
              <img src={PokeballImg} alt="" className="object-contain" />
            </div>
            <div className="flex justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm md:text-base font-semibold">Poke Ball</span>
                <h4 className="text-gray-400 text-xs md:text-sm">Mass-produced and reliable.</h4>
              </div>
              <div className="flex gap-2 px-2 py-1 bg-green-100 rounded-md h-fit shrink-0">
                <Wallet />
                <span className="text-sm md:text-base font-bold">50</span>
              </div>
            </div>
          </div>
          {/* Great Ball */}
          <div onClick={() => handleSelectBall("greatBall")} className="flex flex-col w-full gap-3 md:gap-4 hover:brightness-90 rounded-2xl cursor-pointer">
            <div className="flex justify-center w-full py-5 bg-blue-400 h-40 md:h-52 rounded-2xl">
              <img src={GreatBallImg} alt="" className="object-contain" />
            </div>
            <div className="flex justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm md:text-base font-semibold">Great Ball</span>
                <h4 className="text-gray-400 text-xs md:text-sm">It lives by it's name. 'Great' performance.</h4>
              </div>
              <div className="flex gap-2 px-2 py-1 bg-green-100 rounded-md h-fit shrink-0">
                <Wallet />
                <span className="text-sm md:text-base font-bold">100</span>
              </div>
            </div>
          </div>
          {/* Master Ball */}
          <div onClick={() => handleSelectBall("masterBall")} className="flex flex-col w-full gap-3 md:gap-4 hover:brightness-90 rounded-2xl cursor-pointer">
            <div className="flex justify-center w-full py-5 bg-purple-400 h-40 md:h-52 rounded-2xl">
              <img src={MasterBallImg} alt="" className="object-contain" />
            </div>
            <div className="flex justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm md:text-base font-semibold">Master Ball</span>
                <h4 className="text-gray-400 text-xs md:text-sm">No Pokemon can handle this Poke Ball.</h4>
              </div>
              <div className="flex gap-2 px-2 py-1 bg-green-100 rounded-md h-fit shrink-0">
                <Wallet />
                <span className="text-sm md:text-base font-bold">500</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Shop;

import { useEffect, useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import Dialog from "../Shared/Dialog";
import Wallet from "../icons/Wallet";

const CheckoutDialog = ({
  onClose,
  onSubmit,
  typeball,
  value,
  onConfirm,
  setValue,
  totalCoin,
}) => {
  const [totalCost, setTotalCost] = useState(false);

  useEffect(() => {
    if (totalCoin > 0) {
      setTotalCost(true);
    }
  }, [totalCoin, totalCost]);

  return (
    <Dialog onCancel={onClose}>
      <div className="flex flex-col gap-6 p-6 bg-white w-96 rounded-2xl">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-4">
            <div className="w-4 h-8 bg-blue-200 rounded"></div>
            <span className="text-xl font-semibold">Purchese: {typeball}</span>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center rounded-full w-9 h-9 bg-slate-100 hover:bg-slate-300"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="w-full h-px bg-gray-200"></div>
        {totalCost ? (
          <>
            <div className="flex flex-col">
              <span className="text-base font-medium text-gray-500">
                You’re going to purchase: {typeball}
              </span>
              <span className="text-base font-medium text-gray-500">
                That will cost you...
              </span>
            </div>
            <div className="flex gap-2">
              <Wallet size={"36"} />
              <span className="text-4xl font-medium">{totalCoin}</span>
            </div>
            <button
              className="flex justify-center w-full py-3 text-base font-bold text-white bg-blue-500 border border-gray-100 border-solid hover:ease-in-out hover:bg-blue-600 rounded-xl"
              onClick={onSubmit}
            >
              Confirm
            </button>
          </>
        ) : (
          <>
            <div className="flex flex-col">
              <span className="text-base font-medium text-gray-500">
                You’re going to purchase: {typeball}
              </span>
              <span className="text-base font-medium text-gray-500">
                How much do you want?
              </span>
            </div>
            <input
              type="number"
              min={0}
              value={value}
              onChange={setValue}
              className="w-full p-3 text-base font-semibold text-gray-500 bg-gray-100 rounded-xl"
            />
            <button
              className="flex justify-center w-full py-3 text-base font-bold text-white bg-blue-500 border border-gray-100 border-solid hover:ease-in-out hover:bg-blue-600 rounded-xl"
              onClick={onConfirm}
            >
              Confirm
            </button>
          </>
        )}
      </div>
    </Dialog>
  );
};

export default CheckoutDialog;

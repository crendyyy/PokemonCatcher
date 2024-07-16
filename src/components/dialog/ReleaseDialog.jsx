import CloseIcon from "../icons/CloseIcon";
import Dialog from "../Shared/Dialog";

const ReleaseDialog = ({ onClose, onSubmit, nickname }) => {
  return (
    <Dialog onCancel={onClose}>
      <div className="flex flex-col gap-6 p-6 bg-white w-96 rounded-2xl">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-4">
            <div className="w-4 h-8 bg-red-200 rounded"></div>
            <span className="text-xl font-semibold">Release {nickname}</span>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center rounded-full w-9 h-9 bg-slate-100"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="w-full h-px bg-gray-200"></div>
        <div className="flex flex-col">
          <span className="text-base font-medium text-gray-500">
            Are you sure you want to release {nickname}?
          </span>
          <span className="text-base font-medium text-gray-500">
            This action is irreversible.
          </span>
        </div>
        <div className="flex w-full gap-4">
          <button
            onClick={onSubmit}
            className="flex justify-center w-full py-3 text-base font-bold border border-gray-200 border-solid hover:ease-in-out hover:bg-red-500 hover:text-white rounded-xl"
          >
            Yes
          </button>
          <button
            className="flex justify-center w-full py-3 text-base font-bold text-white bg-blue-500 border border-gray-100 border-solid hover:ease-in-out hover:bg-blue-600 rounded-xl"
            onClick={onClose}
          >
            No
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default ReleaseDialog;

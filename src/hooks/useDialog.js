import { useState } from "react";

const useDialog = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return {
    isDialogOpen,
    openDialog: handleOpenDialog,
    closeDialog: handleCloseDialog,
  };
};
export default useDialog;

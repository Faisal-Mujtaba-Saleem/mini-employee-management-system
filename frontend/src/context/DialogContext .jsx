import React, { createContext, useState } from "react";

export const DialogContext = createContext();

export const DialogProvider = ({ children }) => {
  const [dialogTrig, setDialogTrig] = useState(null);
  const [dialogCard, setDialogCard] = useState({
    title: "",
    desc: "",
    content: null,
  });

  const showDialog = (title, desc, content) => {
    setDialogCard({ title, desc, content });

    if (!!dialogTrig) {
      dialogTrig.click(); // Trigger the dialog to open
    }
  };

  return (
    <DialogContext.Provider
      value={{
        dialogTrig,
        setDialogTrig,
        dialogCard,
        showDialog,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

import React, { createContext, useState } from "react";

export const DialogContext = createContext();

export const DialogProvider = ({ children }) => {
  const [dialogTrig, setDialogTrig] = useState(null);
  const [_dialog, setDialog] = useState({
    title: "",
    desc: "",
    content: null,
  });

  const showDialog = (title, desc, content) => {
    setDialog({ title, desc, content });

    if (!!dialogTrig) {
      dialogTrig.click(); // Trigger the dialog to open
    }
  };

  return (
    <DialogContext.Provider
      value={{
        dialogTrig,
        setDialogTrig,
        _dialog,
        showDialog,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

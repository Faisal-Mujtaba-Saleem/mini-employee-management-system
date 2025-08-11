import React, { createContext, useState } from "react";

export const AlertDialogContext = createContext();

export const AlertDialogProvider = ({ children }) => {
  const [alertDialog, setAlertDialog] = useState({
    title: "",
    description: "",
  });
  const [alertDialogTrig, setAlertDialogTrig] = useState(null);

  const showAlertDialog = (title, description) => {
    setAlertDialog({ title, description });
    
    if (!!alertDialogTrig) {
      alertDialogTrig.click(); // Trigger the dialog to open
    }
  };

  return (
    <AlertDialogContext.Provider
      value={{
        alertDialogTrig,
        setAlertDialogTrig,
        alertDialog,
        setAlertDialog,
        showAlertDialog,
      }}
    >
      {children}
    </AlertDialogContext.Provider>
  );
};

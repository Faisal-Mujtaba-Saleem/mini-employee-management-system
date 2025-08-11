import { AlertDialogContext } from "@/context/AlertDialogContext";
import React, { useContext, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

function AppAlertDialog() {
  const alertDialogTrigRef = useRef(null);

  const { setAlertDialogTrig } = useContext(AlertDialogContext);
  const {
    alertDialog: { title, description },
  } = useContext(AlertDialogContext);

  useEffect(() => {
    setAlertDialogTrig(alertDialogTrigRef.current);
  }, []);

  return (
    <AlertDialog>
      <AlertDialogTrigger ref={alertDialogTrigRef} hidden />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AppAlertDialog;

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { DialogContext } from "@/context/DialogContext ";
import { useContext, useEffect, useRef } from "react";
import { AlertDialogContext } from "@/context/AlertDialogContext";
import { useReactToPrint } from "react-to-print";
import Card from "./Card";

export function AppPrintDialog(props) {
  const { setDialogTrig } = useContext(DialogContext);
  const { dialogCard } = useContext(DialogContext);
  const { showAlertDialog } = useContext(AlertDialogContext);

  const dialogTrigRef = useRef(null);
  const printableCardRef = useRef(null);

  // Setting the dialog trigger in a dialog context
  useEffect(() => {
    setDialogTrig(dialogTrigRef.current);
  }, []);
  useEffect(() => {
    console.log(printableCardRef.current);
  }, [printableCardRef]);

  const handlePrint = useReactToPrint({
    contentRef: printableCardRef,
    onPrintError: (err) => {
      showAlertDialog("Error", err);
    },
  });

  return (
    <Dialog>
      <form>
        <DialogTrigger ref={dialogTrigRef} hidden />
        <DialogContent className="sm:max-w-[50vw] max-h-[80vh] overflow-y-scroll">
          <DialogHeader>
            <DialogTitle>
              <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-300 text-white font-semibold text-base shadow-md border border-indigo-200">
                {dialogCard.title}
              </span>
            </DialogTitle>
            <DialogDescription>{dialogCard.desc}</DialogDescription>
          </DialogHeader>

          {/* dialog content here */}
          <div
            ref={printableCardRef}
            id="printable-card-container"
            className="flex justify-center items-center my-4"
          >
            <Card {...dialogCard.content} />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handlePrint}>Print</Button>
            {/* <Button>Download</Button> */}
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

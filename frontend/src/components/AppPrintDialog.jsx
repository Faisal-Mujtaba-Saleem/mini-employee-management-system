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

export function AppDialog(props) {
  const dialogTrigRef = useRef(null);
  const printableContentContainerRef = useRef(null);

  const { setDialogTrig } = useContext(DialogContext);
  const { _dialog } = useContext(DialogContext);

  useEffect(() => {
    setDialogTrig(dialogTrigRef.current);
  }, []);

  const handlePrint = () => {
    const printWindow = window.open();
    printWindow.document.write(`
    <html>
      <head>
        <title>${_dialog.title}</title>
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        <style>
        /* Optional styling for print */
        body { font-family: Arial, sans-serif; }
        </style>
        </head>
        <body>
        ${printableContentContainerRef.current.innerHTML}
        </body>
    </html>
  `);
    printWindow.document.close();

    setTimeout(() => {
      printWindow.print();
    }, 100);
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger ref={dialogTrigRef} hidden />
        <DialogContent className="sm:max-w-[50vw] max-h-[80vh] overflow-y-scroll">
          <DialogHeader>
            <DialogTitle>
              <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-300 text-white font-semibold text-base shadow-md border border-indigo-200">
                {_dialog.title}
              </span>
            </DialogTitle>
            <DialogDescription>{_dialog.desc}</DialogDescription>
          </DialogHeader>

          {/* dialog content here */}
          <div
            id="printable-content-container"
            className="flex justify-center items-center my-4"
            ref={printableContentContainerRef}
          >
            {_dialog.content}
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

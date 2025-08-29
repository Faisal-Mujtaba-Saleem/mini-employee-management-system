import Card from "@/components/Card";
import { AlertDialogContext } from "@/context/AlertDialogContext";
import React, { useContext, useRef, useState } from "react";
import { useEffect } from "react";
import { useReactToPrint } from "react-to-print";

function PrintAllCards() {
  const [employees, setEmployees] = useState([]);
  const [isError, setIsError] = useState(false);

  const { showAlertDialog } = useContext(AlertDialogContext);

  const PrintAllCardsRef = useRef(null);

  const fetchAllEmployees = async () => {
    try {
      // Fetching employee logic here:

      // Fetch employee details from the API
      const res = await fetch(`http://localhost:3000/api/employees/fetch-all`);
      // Check if the response is ok
      if (!res.ok) {
        throw new Error("Failed to fetch employees");
      }

      // Handle the response data as needed
      const data = await res.json();
      return data;
    } catch (error) {
      // Reject the promise with the error
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchAllEmployees()
      .then(({ message, employees }) => {
        setEmployees(employees);

        isError && setIsError(false);

        console.log(message, employees);
      })
      .catch((err) => {
        setIsError(true);
        console.log("Error fetching employees:", err);
      });
  }, []);

  const handlePrint = useReactToPrint({
    contentRef: PrintAllCardsRef,
    onPrintError: (err) => {
      showAlertDialog("Error", err);
    },
  })

  return (
    <div className="flex flex-col justify-center items-center shadow-lg shadow-indigo-200 rounded-lg p-8 overflowy-scroll">
      <h1 className="text-3xl font-bold mb-4">Print All Cards</h1>
      <div ref={PrintAllCardsRef} className="hidden print:flex flex-col justify-center items-center">
        {employees.map((employee) => (
          <div key={employee._id} className="break-after-page last:break-after-auto flex justify-center items-center h-full w-full">
            <Card {...employee} />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrint}
        className="bg-indigo-500 hover:bg-indigo-300 text-white py-2 px-4 rounded"
      >
        Print
      </button>
    </div>
  );
}

export default PrintAllCards;

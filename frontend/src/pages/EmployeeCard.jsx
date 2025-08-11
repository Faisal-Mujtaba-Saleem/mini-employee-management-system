import Card from "@/components/Card";
import { AlertDialogContext } from "@/context/AlertDialogContext";
import { DialogContext } from "@/context/DialogContext ";
import React, { useContext } from "react";

function EmployeeCard() {
  const { showDialog } = useContext(DialogContext);
  const { showAlertDialog } = useContext(AlertDialogContext);

  const fetchEmployee = async (e) => {
    e.preventDefault();

    try {
      // Handle the form submission logic here:

      // Create a FormData object from the form submission
      const fetchEmployeeForm = new FormData(e.target);

      // Assuming the form has fields named 'employeeId' and 'phoneNumber'
      const id = fetchEmployeeForm.get("employeeId");
      const phoneNumber = fetchEmployeeForm.get("phoneNumber");

      //   Fetch employee details from the API
      const res = await fetch(
        `http://localhost:3000/api/employee/fetch?id=${id}&phoneNumber=${phoneNumber}`
      );
      // Check if the response is ok
      if (!res.ok) {
        throw new Error("Failed to fetch employee details");
      }

      // Handle the response data as needed
      const data = await res.json();
      console.log("Employee details fetched successfully:", data);

      // Show a dialog with the fetched employee details
      showDialog(data.employee.name, "", Card(data.employee));

      // Reset the form after successful fetch
      e.target.reset();
    } catch (error) {
      console.error("Error fetching employee details:", error);
      showAlertDialog("Error", error.message);
    }
  };

  return (
    <div
      className="employee-card-form-container min-h-[350px] flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-100 p-8 rounded-3xl shadow-2xl"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <form
        className="employee-card-form w-full max-w-md bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6 border border-indigo-100"
        onSubmit={fetchEmployee}
      >
        <h2 className="text-2xl font-extrabold text-indigo-700 text-center mb-2 tracking-wide">
          Fetch Employee Details
        </h2>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="employeeId"
            className="text-sm font-semibold text-indigo-600"
          >
            Employee ID
          </label>
          <input
            type="text"
            id="employeeId"
            name="employeeId"
            placeholder="Enter Employee ID"
            className="employee-id-input px-4 py-3 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base bg-slate-50"
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phoneNumber"
            className="text-sm font-semibold text-indigo-600"
          >
            Registered Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter Phone Number"
            className="phone-number-input px-4 py-3 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base bg-slate-50"
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          className="fetch-btn w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-400 text-white font-bold text-lg shadow-md hover:from-indigo-600 hover:to-indigo-500 transition-colors cursor-pointer"
        >
          Fetch Details
        </button>
      </form>
    </div>
  );
}

export default EmployeeCard;

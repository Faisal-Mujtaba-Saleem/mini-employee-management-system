import React, { useContext } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Sheet } from "../components/ui/sheet";
import { AlertDialogContext } from "@/context/AlertDialogContext";

function UploadCSV() {
  const { showAlertDialog } = useContext(AlertDialogContext);

  const handleSubmitCSV = async (e) => {
    e.preventDefault();
    try {
      // Handle the file upload logic here
      const CSV_SubmissionForm = new FormData(e.target);

      const res = await fetch("http://localhost:3000/api/employees/upload", {
        method: "POST",
        body: CSV_SubmissionForm,
      });

      if (!res.ok) {
        throw new Error("Failed to upload CSV. Please try again.");
      }

      const {message, data} = await res.json();
      console.log(message, data);

      // Handle success (e.g., show a success message, redirect, etc.)
      showAlertDialog("Success", message);

      // Reset the form after successful upload
      e.target.reset();
    } catch (error) {
      console.error("Error uploading CSV:", error);

      // Handle error (e.g., show an error message)
      showAlertDialog("Error", error.message);
    }
  };

  return (
      <div
        id="upload-csv-container"
        className="flex flex-col items-center min-h-[auto] max-w-[auto]"
      >
        <div className="upload-csv-icon w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-400 flex items-center justify-center mb-6 shadow-lg">
          <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
            <path
              d="M12 16V4m0 12l-4-4m4 4l4-4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="3"
              y="16"
              width="18"
              height="4"
              rx="2"
              fill="white"
              opacity="0.2"
            />
          </svg>
        </div>
        <h2 className="upload-csv-title text-center mb-4 font-extrabold text-3xl text-indigo-900 tracking-wide">
          Upload CSV
        </h2>
        <p className="upload-csv-desc text-center text-indigo-500 text-base mb-7">
          Easily import your employee data by uploading a CSV file.
          <br />
          Only .csv files are supported.
        </p>
        <form
          className="upload-csv-form w-full flex flex-col gap-5"
          onSubmit={handleSubmitCSV}
        >
          <Input
            type="file"
            accept=".csv"
            name="csv_file"
            className="upload-csv-input rounded-xl border border-indigo-200 bg-white text-base cursor-pointer"
            style={{ padding: "1% 5%" }}
          />
          <Button className="upload-csv-btn font-bold text-lg py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-400 text-white shadow-md hover:from-indigo-600 hover:to-indigo-500 transition-colors cursor-pointer">
            <input
              type="button"
              value="Upload"
              className="cursor-pointer outline-none"
            />
          </Button>
        </form>
      </div>
  );
}

export default UploadCSV;

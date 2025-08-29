import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router";
import Header from "./components/Header";
import UploadCSV from "./pages/UploadCSV";
import AppAlertDialog from "./components/AppAlertDialog";
import EmployeeCard from "./pages/EmployeeCard";
import { AppDialog } from "./components/AppPrintDialog";
import PrintAllCards from "./pages/PrintAllCards";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    window.location.pathname === "/" && navigate("/upload");
  }, [navigate]);

  return (
    <>
      <Header />
      <main>
        <AppAlertDialog />
        <AppDialog />

        <div
          className="flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-100 mx-auto p-8 rounded-3xl shadow-2xl"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Your routes and components will go here */}
          <Routes>
            <Route path="/upload" element={<UploadCSV />} />
            <Route path="/employee-card" element={<EmployeeCard />} />
            <Route path="/print-all-cards" element={<PrintAllCards />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;

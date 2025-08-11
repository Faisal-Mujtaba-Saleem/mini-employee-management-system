import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";
import Header from "./components/Header";
import UploadCSV from "./pages/UploadCSV";
import AppAlertDialog from "./components/AppAlertDialog";
import EmployeeCard from "./pages/EmployeeCard";
import { AppDialog } from "./components/AppPrintDialog";

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
        <AppDialog/>
        
        <div>
          {/* Your routes and components will go here */}
          <Routes>
            <Route path="/upload" element={<UploadCSV />} />
            <Route path="/employee-card" element={<EmployeeCard />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;

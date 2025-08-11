import React, { useRef } from "react";
import logo from "../assets/logo.svg";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import AppSideBar from "./AppSideBar";

const Header = () => {
  const mobMenuTrigRef = useRef(null);
  return (
    <div>
      <header className="bg-white">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex gap-1 lg:flex-1">
          <SidebarProvider>
            <AppSideBar />
            <SidebarTrigger className={"sticky top-0"}/>
          </SidebarProvider>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img src={logo} alt="Logo" />
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

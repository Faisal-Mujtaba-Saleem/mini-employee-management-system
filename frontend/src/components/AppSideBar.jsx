import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Printer, Upload, User } from "lucide-react";
import { Link } from "react-router";

function AppSideBar() {
  const sidebarItems = [
    { title: "Upload CSV", url: "/upload", icon: Upload },
    { title: "Employee Card", url: "/employee-card", icon: User },
    { title: "Print All Cards", url: "/print-all-cards", icon: Printer },
  ];
  
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="flex flex-col gap-2">
          <SidebarGroupLabel>
            <span className="text-lg font-semibold px-2">E.M.S</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSideBar;

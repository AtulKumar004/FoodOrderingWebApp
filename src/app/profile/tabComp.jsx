"use client";
import React, { useState } from "react";
import NavbarTabs from "../../components/NavbarTabs/navbarTabs";
// const tabs = [
//     { name: "My Account", href: "#", current: true },
//     { name: "Company", href: "#", current: false },
//     { name: "Team Members", href: "#", current: false },
//     { name: "Billing", href: "#", current: false },
//   ];
function TabComp() {
  const [activeTabs, setActiveTabes] = useState([
    { name: "My Account", href: "/profile", current: true },
    { name: "Address", href: "#", current: false },
    { name: "My Orders", href: "#", current: false },
   
  ]);



  return <NavbarTabs tabs = {activeTabs} />;
}

export default TabComp;

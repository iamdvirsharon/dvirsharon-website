
import React from "react";
import { Navbar1 } from "@/components/ui/navbar-1";

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 py-4">
      <div className="container max-w-6xl mx-auto">
        <Navbar1 />
      </div>
    </header>
  );
};

export default Header;

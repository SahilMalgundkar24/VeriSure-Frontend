import React from "react";
import CtaButton from "./ui/CtaButton";

const Navbar = () => {
  return (
    <nav className="px-16 py-5 w-full h-auto flex justify-between items-center z-50 bg-[#eff5ff]/70  backdrop-blur-lg">
      <div className="font-semibold text-xl">VeriEase</div>
      <div>
        <ul className="flex gap-7 text-sm">
          <li>About</li>
          <li>How it works</li>
          <li>Features</li>
          <li>Testimonials</li>
        </ul>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import CtaButton from "./ui/CtaButton";

const Navbar = () => {
  return (
    <div className="px-16 py-4 w-full h-auto flex justify-between items-center">
      <div className="font-semibold text-xl">VeriEase</div>
      <div>
        <ul className="flex gap-7 text-sm">
          <li>About</li>
          <li>How it works</li>
          <li>Features</li>
          <li>Testimonials</li>
        </ul>
      </div>
      <div>
        <CtaButton name="Demo" className="text-xs px-1 py-1" />
      </div>
    </div>
  );
};

export default Navbar;

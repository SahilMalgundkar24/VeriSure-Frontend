import React from "react";

const Footer = () => {
  return (
    <footer className="px-16">
      <div className="h-px w-full bg-[#262932] opacity-30"></div>
      <div className="flex justify-between items-center my-4">
        <div className="font-semibold text-xl">VeriEase</div>
        <div className="text-[#262932] font-light flex gap-5 text-sm">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

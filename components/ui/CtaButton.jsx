import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const CtaButton = ({ name }) => {
  return (
    <Link href="/form">
      <button className="flex items-center group bg-[#262932] rounded-full text-white pl-5 pr-3 py-2 ">
        <div className="my-1 mr-3">{name}</div>
        <div className="w-0 p-0 bg-white h-7 group-hover:w-7 group-hover:p-1 transition-all duration-300 ease-in-out flex rounded-full items-center justify-center">
          <ArrowUpRight color="#262932" />
        </div>
      </button>
    </Link>
  );
};

export default CtaButton;

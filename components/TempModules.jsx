"use client";
import React from "react";
import Link from "next/link";

const TempModules = () => {
  return (
    <div className="px-16">
      <h1 className="text-3xl font-medium">Different Modules Used</h1>

      <div className="py-5  flex gap-7">
        <Link
          href="/classify"
          className="px-7 py-3 rounded-full bg-gradient-to-br from-[#E1DAFC] to-[#B8D4FC]"
        >
          <h1 className="font-medium">Classify</h1>
        </Link>

        <Link
          href="/verify"
          className="px-7 py-3 rounded-full bg-gradient-to-br from-[#E1DAFC] to-[#B8D4FC]"
        >
          <h1 className="font-medium">Verify</h1>
        </Link>
      </div>
    </div>
  );
};

export default TempModules;

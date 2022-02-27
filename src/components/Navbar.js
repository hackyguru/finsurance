import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <img src="finsurance.png" className="w-80 p-6" />
      <div className="space-x-10  desc mt-10 mr-10 text-white">
        <a href="https://github.com/hackyguru/finsurance">Github</a>
        <a>Demo</a>
        <a href="/team">Team</a>
      </div>
    </div>
  );
}

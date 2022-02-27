import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <img src="finsurance.png" className="w-80 p-6" />
      <div className="space-x-10 text-gray-800 desc mt-10 mr-10">
        <button>About</button>
        <button>Github</button>
        <button>Team</button>
      </div>
    </div>
  );
}

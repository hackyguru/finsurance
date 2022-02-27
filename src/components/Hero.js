import React from "react";

export default function Hero() {
  return (
    <div className="flex justify-between px-20">
      <div className="mt-40">
        <div className="title text-5xl text-primary">
          Decentralized Insurance
          <br />
          with open data...
        </div>
        <div className="text-gray-800 desc mt-8">
          This is a very straightforward description about the bla bla project
          that we are making.
          <br />
          This line should make any user understand wtf the project is.
        </div>
        <button className="bg-primary p-3 rounded-md mt-10 text-bg title">
          Get Started
        </button>
      </div>
      <img src="hero.png" className="w-2/5" />
    </div>
  );
}

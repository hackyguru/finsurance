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

        <div class="relative">
          <label class="sr-only" for="email">
            Phone number
          </label>

          <input
            class="w-full py-3 mt-10 pl-3 pr-12 text-sm border-2 border-gray-200 rounded"
            id="phone"
            placeholder="Phone number"
          />

          <span class="absolute text-gray-500 -translate-y-1/2 pointer-events-none top-1/2 right-4">
            <svg
              class="w-6 h-6 mt-10"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
          </span>
        </div>

        <button className="bg-primary p-3 rounded-md mt-10 text-bg title">
          Get Started
        </button>
      </div>
      <img src="hero.png" className="w-2/5" />
    </div>
  );
}

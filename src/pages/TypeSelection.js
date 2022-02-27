import React from "react";
import Navbar from "../components/Navbar";

export default function TypeSelection() {
  return (
    <div>
      <Navbar />
      <div className="mt-40 justify-around text-center title text-3xl text-gray-800 mb-10">
        What type of insurance do you prefer?
      </div>
      <div className="flex justify-around">
        <div className="flex space-x-5">
          <a>
            <div className="h-52 w-80 pt-10 pl-16 justify-around  border-primary border-2 rounded-lg align-middle text-3xl text-primary white-glassmorphism title">
              <svg
                class="w-10 h-10 mb-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Personal insurance
            </div>
          </a>
          <a>
            <div className="h-52 w-80 pt-10 pl-16 justify-around  border-primary border-2 rounded-lg align-middle text-3xl text-primary white-glassmorphism title">
              <svg
                class="w-10 h-10 mb-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"></path>
              </svg>
              Vehicle insurance
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

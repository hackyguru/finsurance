import React from "react";
import Navbar from "../components/Navbar";

export default function VehicleNumber() {
  return (
    <div className="text-center ">
      <Navbar />
      <div className="mt-40 justify-around text-center title text-3xl text-gray-800 mb-10">
        What is your vehicle's registration number?
      </div>
      <div>
        <div className="justify-around text-center ml-80">
          <div class="relative w-80 ml-72">
            <label class="sr-only" for="email">
              {" "}
              Email{" "}
            </label>

            <input
              class="w-full py-3 pl-3 pr-12 text-sm border-2 border-gray-200 rounded"
              id="email"
              type="email"
              placeholder="Email"
            />

            <span class="absolute text-gray-500 -translate-y-1/2 pointer-events-none top-1/2 right-4">
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

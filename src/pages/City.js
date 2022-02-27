import React from "react";
import Navbar from "../components/Navbar";

export default function City() {
  return (
    <div className="text-center ">
      <Navbar />
      <div className="mt-40 justify-around text-center title text-3xl text-gray-800 mb-10">
        What is your city of residence?
      </div>
      <div>
        <div className="justify-around text-center ml-80">
          <div class="relative w-80 ml-72">
            <label class="sr-only" for="">
              City
            </label>

            <input
              class="w-full py-3 pl-3 pr-12 text-sm border-2 border-gray-200 rounded"
              placeholder="City"
            />

            <span class="absolute text-gray-500 -translate-y-1/2 pointer-events-none top-1/2 right-4">
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <button class="mt-10 p-3 bg-primary rounded-md text-white title">
          Continue
        </button>
      </div>
    </div>
  );
}

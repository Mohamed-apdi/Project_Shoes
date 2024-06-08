import React from "react";
import { PiTelegramLogo } from "react-icons/pi";

const Home = () => {
  return (
    <div>
      <section className="sign-up-letter container  max-w-screen-xl p-2 flex gap-2">
        <div className="bg-gray-200 w-1/2 rounded-xl flex flex-col items-center justify-center">
          <PiTelegramLogo className="mt-12 text-[24px]" />
          <p className="text-[30px] font-bold">Sign up for our newsletter</p>
          <div className="flex mt-3">
            <input
              className="bg-gray-100 border-[2px] border-black w-[300px] rounded-tl-lg rounded-bl-lg placeholder:pl-3 placeholder:text-black"
              type="text"
              placeholder="Enter your email..."
            />
            <button className="bg-black text-white p-2 rounded-tr-lg rounded-br-lg px-8 ">
              Submit
            </button>
          </div>
        </div>
        <div className="bg-black w-1/2 rounded-xl">h</div>
      </section>
    </div>
  );
};

export default Home;

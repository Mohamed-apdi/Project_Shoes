import { ArrowRight } from "lucide-react";
import React from "react";
import { Element } from "react-scroll";
import {
  PiBehanceLogo,
  PiFacebookLogo,
  PiLinkedinLogo,
  PiPinterestLogo,
  PiTwitterLogo,
} from "react-icons/pi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Element name="about-section">
        <div className="container p-2 max-w-screen-xl text-white">
          <div className="flex flex-col bg-black px-2 py-4 rounded-xl relative">
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <img
                  className="w-18 h-12 ml-4 cursor-pointer"
                  src="/public/images/jordan-white-2.png"
                  alt="Logo"
                />
                <ul className="flex items-center gap-14 text-[13px] cursor-pointer">
                  <li className="hover:text-gray-400">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className="hover:text-gray-400">
                    <Link to="/products">Products</Link>
                  </li>
                  <li className="hover:text-gray-400">
                    <Link to="/about">Terms & conditions</Link>
                  </li>
                  <li className="hover:text-gray-400">
                    <Link to="/faq">FAQ</Link>
                  </li>
                </ul>
              </div>
              <div className="flex items-center text-[20px] gap-4 px-8 cursor-pointer">
                <PiFacebookLogo className="hover:text-gray-400" />
                <PiLinkedinLogo className="hover:text-gray-400" />
                <PiPinterestLogo className="hover:text-gray-400" />
                <PiTwitterLogo className="hover:text-gray-400" />
                <PiBehanceLogo className="hover:text-gray-400" />
              </div>
            </div>
            <hr className="border-gray-600 my-1 mx-5" />
            <div className="flex justify-between text-gray-200 py-2 px-4 items-center">
              <p className="text-[11px] text-gray-300">
                Copy right: Jordan shoes @2024
              </p>
              <button className="text-gray-300 flex gap-2 border boredr-white py-2 px-3 cursor-pointer border-gray-400 hover:text-gray-500 rounded-lg">
                Talk with us <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};

export default Footer;

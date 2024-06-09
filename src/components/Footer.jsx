import {
  PiBehanceLogo,
  PiFacebookLogo,
  PiLinkedinLogo,
  PiPinterestLogo,
  PiTwitterLogo,
} from "react-icons/pi";
import { Element } from 'react-scroll';
const Footer = () => {
  return (
    <Element name="about-section">
    <div className="container p-2 max-w-screen-xl">
      <div className="flex justify-between px-6 items-center bg-gray-950 py-3 rounded-2xl">
        <div className="flex items-center gap-4">
          <img
            className="w-20 h-16"
            src="/public/images/jordan-white.png"
            alt="logo"
          />
          <div className="items-center">
            <ul className="flex items-center gap-7 cursor-pointer text-black/80 text-sm font-sans font-semibold">
              <li className=" text-white">About us</li>
              <li className=" text-white">Products</li>
              <li className=" text-white">Terms & Conditions</li>
              <li className=" text-white">FAQ</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 text-white">
          <PiFacebookLogo />
          <PiTwitterLogo />
          <PiLinkedinLogo />
          <PiPinterestLogo />
          <PiBehanceLogo />
        </div>
      </div>
      <p className="text-white">hello my friendos</p>
    </div>
    </Element>
  );
};

export default Footer;

import { ChevronDown, Heart, Search, X } from "lucide-react";
import { IoBagHandleOutline } from "react-icons/io5";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
const Header = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const searchVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { opacity: 1, width: "auto" },
    exit: { opacity: 0, width: 0 },
  };

  return (
    <>
      <div className="container p-2 max-w-screen-xl">
        <div className="flex justify-between px-6 items-center bg-gray-200 rounded-2xl">
          <div className="flex items-center gap-4">
            <img
              className="w-20 h-16"
              src="/public/images/jordan-logo-rpreview.png"
              alt="logo"
            />
            <div className="items-center">
              <ul className="flex items-center gap-4 cursor-pointer text-black/80 text-sm font-sans font-semibold">
                <li className="font-bold">
                  <Link to="/">HOME</Link>
                </li>
                <div>
                  <li
                    onMouseEnter={() => setIsShopOpen(true)}
                    onMouseLeave={() => setIsShopOpen(false)}
                    className="relative items-center py-2"
                  >
                    SHOP
                    <ChevronDown className="inline-block w-5" />
                  </li>
                  <AnimatePresence>
                    {isShopOpen && (
                      <motion.div
                        className="absolute mt-3 w-48 bg-white z-10 text-black rounded-md shadow-lg"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onMouseEnter={() => setIsShopOpen(true)}
                        onMouseLeave={() => setIsShopOpen(false)}
                      >
                        <li className="block px-4 py-2 hover:underline hover:translate-x-0.5 transition-all">
                          <Link to="/nike">Nike</Link>
                        </li>
                        <li className="block px-4 py-2 hover:underline hover:translate-x-0.5 transition-all">
                          <Link to="/jordan">Jordan</Link>
                        </li>
                        <li className="block px-4 py-2 hover:underline hover:translate-x-0.5 transition-all">
                          <Link to="/adidas">Adidas</Link>
                        </li>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <li>
                  <ScrollLink to="about-section" smooth={true} duration={1000}>
                    ABOUT
                  </ScrollLink>
                </li>
                <li>
                  <Link to="/contact">CONTACT</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between gap-5">
            <div className="flex items-center gap-x-4">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    className="relative shadow w-full"
                    variants={searchVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <input
                      className="py-1.5 w-full outline-none placeholder:text-black placeholder:text-sm rounded-md pl-3 pr-8"
                      type="text"
                      placeholder="search your shoes"
                    />
                    <Search className="w-4 absolute top-2 right-2 cursor-pointer" />
                  </motion.div>
                )}
              </AnimatePresence>
              {isSearchOpen ? (
                <X
                  className="text-2xl cursor-pointer"
                  onClick={() => setIsSearchOpen(false)}
                />
              ) : (
                <Search
                  className="text-2xl cursor-pointer"
                  onClick={() => setIsSearchOpen(true)}
                />
              )}
            </div>
            <div className="Cart relative">
              <Link to="/cart">
                <IoBagHandleOutline className="text-2xl" />
              </Link>
              <span className="items-center absolute top-[-12px] text-white right-[-7px] rounded-full border px-[5px] bg-green-500 py-[1px] text-xs font-semibold transition-colors">
                0
              </span>
            </div>
            <div className="Favorites">
              <Link to="/favorites">
                <Heart className="text-2xl" />
              </Link>
            </div>
            <button className="text-md font-bold hover:underline">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

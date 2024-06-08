import { ChevronDown, Heart, Search, X } from "lucide-react";
import { IoBagHandleOutline } from "react-icons/io5";
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Header = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <>
      <div className="container p-2 ">
        <div className="flex justify-between px-6 items-center bg-gray-100 py-3 rounded-2xl">
          <div className="flex items-center gap-4">
            <img className="w-20 h-16" src="/public/images/jordan-logo-rpreview.png" alt="logo" />
        
          <div className="items-center">
            <ul className="flex items-center gap-4 cursor-pointer text-black/80 text-sm font-sans font-semibold">
              <li className="font-bold">HOME</li>
              <div>
              <li onMouseEnter={() => setIsShopOpen(true)} onMouseLeave={() => setIsShopOpen(false)} className="relative items-center py-2">SHOP <ChevronDown className="inline-block w-5"/></li>
              <CSSTransition
                    in={isShopOpen}
                    timeout={3000}
                    classNames="dropdown"
                    unmountOnExit
                  >
                    <div 
                      className="absolute  mt-3 w-48 bg-white text-black rounded-md shadow-lg transition duration-300 ease-in-out transform  group-hover:scale-100 group-hover:opacity-100"
                      onMouseEnter={() => setIsShopOpen(true)}
                      onMouseLeave={() => setIsShopOpen(false)}
                    >
                      <li className="block px-4 py-2 hover:underline hover:translate-x-0.5 transition-all">Nike</li>
                      <li className="block px-4 py-2 hover:underline hover:translate-x-0.5  transition-all">Jordan</li>
                      <li className="block px-4 py-2 hover:underline hover:translate-x-0.5  transition-all">Adidas</li>
                    </div>
                  </CSSTransition>
              </div>
              <li>ABOUT</li>
              <li>CONTACT</li>
            </ul>
          </div>
          </div>
          <div className="flex justify-between gap-5">

            
          <div className="flex items-center gap-x-4">
          <CSSTransition
                in={isSearchOpen}
                timeout={300}
                classNames="dropdown"
                unmountOnExit
              >
                <div className="relative shadow w-full"
                    >
                  <input
                    className="py-1.5 w-full outline-none placeholder:text-black placeholder:text-sm rounded-md pl-3 pr-8"
                    type="text"
                    placeholder="search your shoes"
                  />
                  <Search className="w-4 absolute top-2 right-2 cursor-pointer" />
                </div>
              </CSSTransition>

          {isSearchOpen ? (
                <X className="text-2xl cursor-pointer" onClick={() => setIsSearchOpen(false)} />
              ) : (
                <Search className="text-2xl cursor-pointer" onClick={() => setIsSearchOpen(true)} />
              )}
              
            </div>

              <div className="Cart relative">
                <IoBagHandleOutline className="text-2xl" />
                <span className="items-center absolute top-[-12px] text-white right-[-7px] rounded-full border px-[5px] 
                 bg-green-500
                py-[1px] text-xs font-semibold transition-colors">
                  0
                </span>
              </div>
              <div className="Favorites">
                <Heart className="text-2xl" />
              </div>
            <div className="profile">
              {/* <img
                className="w-10 h-10 rounded-full"
                src="/public/images/sheos.jpg"
                alt="profile"
              /> */}
              <button className="text-md font-bold hover:underline">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

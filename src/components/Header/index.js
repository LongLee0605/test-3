"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import CustomButton from "../CustomBtn";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

  
  const updateDeviceType = () => {
    setIsTabletOrMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    updateDeviceType(); 
    window.addEventListener("resize", updateDeviceType);
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return (
    <header className="header-border px-4 relative">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <div>
            <div className="flex items-center">
              <button
                onClick={() => isTabletOrMobile && setIsMenuOpen(!isMenuOpen)}
                className={`p-2 ${
                  isTabletOrMobile ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <Image
                  aria-hidden
                  src="/image/nav.png"
                  alt="Menu icon"
                  width={35}
                  height={36} 
                  className="lg:block hidden"
                />
                <Image
                  aria-hidden
                  src="/image/nav.png"
                  alt="Menu icon"
                  width={28}
                  height={28} 
                  className="lg:hidden block"
                />
              </button>
              <Image
                aria-hidden
                src="/image/logo-header.png"
                alt="Logo"
                width={68}
                height={30}
                className="lg:block hidden"
              />
              <Image
                aria-hidden
                src="/image/logo-header.png"
                alt="Logo"
                width={31}
                height={18}
                className="lg:hidden block"
              />
              <div className="hidden lg:flex gap-8 items-center ml-4">
                <Image
                  aria-hidden
                  src="/image/search.png"
                  alt="Search icon"
                  width={30}
                  height={30}
                />
                <ul className="flex gap-6">
                  {["HOME", "GAME", "INFOR", "NEWS", "PROMOTIONS", "VIP"].map(
                    (item) => (
                      <li key={item}>
                        <a href="#">{item}</a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <CustomButton
                bgColor="bg-[#12294A]"
                textColor="text-white"
                borderRadius="rounded-lg"
                className="text-sm px-3 py-2"
              >
                LOGIN
              </CustomButton>
              <CustomButton
                bgColor="bg-[#01AF70]"
                textColor="text-white"
                borderRadius="rounded-lg"
                className="text-sm px-3 py-2"
              >
                REGISTRATION
              </CustomButton>
            </div>
          </div>
        </div>
        {/* Dropdown Menu */}
        {isMenuOpen && isTabletOrMobile && (
          <div className="absolute top-[101%] left-0 right-0 z-50 bg-[#03193a] shadow-lg">
            <ul className="flex flex-col">
              {["HOME", "GAME", "INFOR", "NEWS", "PROMOTIONS", "VIP"].map(
                (item) => (
                  <li key={item} className="header-border py-3 px-5">
                    <a href="#">{item}</a>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

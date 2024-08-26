import { useState } from "react";
import { SunIcon, MoonIcon, OnclickIcon, OnIcon } from "./svg";
import { ToggleTheme } from "./ToggleTheme";
import { OnclickHeadermobile } from ".";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <main>
      <div className=" container  md:px-[32px] m-auto  bg-[#fff] dark:bg-black dark:text-white ">
        <div className="flex justify-between">
          <div className="text-gray-900 text-3xl not-italic font-normal tracking-[-0.6px] ">
            <h1 className="dark:text-white">Sengedorj</h1>
          </div>
          <div className="md:hidden">
            <OnclickHeadermobile
              handleMenu={handleMenu}
              isOpenMenu={isOpenMenu}
            />
            <div onClick={handleMenu}>
              <OnIcon />
            </div>
          </div>
          <div className=" justify-center  items-center gap-6 md:flex hidden">
            <div className="text-base not-italic font-medium text-gray-600  dark:text-white">
              <button>About</button>
            </div>
            <div className="text-base not-italic font-medium text-gray-600  dark:text-white">
              <button>Work</button>
            </div>
            <div className="text-base not-italic font-medium text-gray-600  dark:text-white">
              <button>Testimonials</button>
            </div>
            <div className="text-base not-italic font-medium text-gray-600  dark:text-white">
              <button>Contact</button>
            </div>
            <div className="h-6 w-[1px] bg-gray-100"></div>
            <div className="flex justify-center items-center gap-4  ">
              <div>
                <ToggleTheme />
              </div>
              <button className="bg-gray-900 rounded-xl py-[6px] px-4 text-base not-italic font-medium text-gray-50">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

import { MobileXbutton, MoonIcon } from "./svg";
import { ToggleTheme } from "./ToggleTheme";

export const OnclickHeadermobile = ({ handleMenu, isOpenMenu }) => {
  return (
    <div
      className={` w-[85%] h-screen  bg-gray-100 flex flex-col fixed transition-all duration-500 p-0 m-0 top-0 ease-in-out dark:bg-black ${
        isOpenMenu ? "right-0" : "right-[-100%]"
      } right-0 `}
    >
      <div>
        <div className="flex justify-between p-4 items-center">
          <h1 className="text-gray-950 text-3xl font-sans dark:text-white">
            Sengedorj
          </h1>
          <button onClick={handleMenu}>
            <MobileXbutton />
          </button>
        </div>
        <div className="flex flex-col border text-gray-600 items-start p-4 gap-4 flex-start border-none dark:text-white ">
          <button onClick={handleMenu}>
            <a href="#about">About</a>
          </button>
          <button>Work</button>
          <button>Testimonials</button>
          <button>Contact</button>
        </div>
        <div className="flex justify-between p-4 items-center">
          <p className="text-[#4B5563] dark:text-white">Switch theme</p>
          <ToggleTheme />
        </div>
        <div className="flex justify-center p-4 ">
          <button className=" border bg-gray-950 rounded-xl pt-2 pb-2 pl-28 pr-28 text-gray-50 border-none dark:bg-white dark:text-black">
            Downlaod CV
          </button>
        </div>
      </div>
    </div>
  );
};

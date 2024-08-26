import {
  FigmaIcon,
  CatIcon,
  TwitterIcon,
  GreenIcon,
  LocationIcon,
} from "./svg";

export const Hero = () => {
  return (
    <div className="container m-auto py-[96px]  px-[16px] ">
      <div className=" flex  md:justify-between gap-12 md:px-8  ">
        <div className="w-[600px] flex flex-col gap-12">
          <div className="flex flex-col gap-2 ">
            <div className="md:hidden w-full h-auto">
              <img src="./money.png" alt="" />
            </div>
            <p className=" text-6xl leading-[72px] not-italic tracking-[-1.2px] font-bold text-gray-900  dark:text-white">
              Hi, I’m senge 👋
            </p>
            <p className="text-base not-italic font-normal text-gray-600  dark:text-white">
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <LocationIcon />
              <p className="text-base not-italic font-normal text-gray-600  dark:text-white">
                Ulaanbaatar, Mongolia
              </p>
            </div>
            <div className="flex gap-2 ">
              <GreenIcon />
              <p className="text-base not-italic font-normal text-gray-600  dark:text-white">
                Available for new projects
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex gap-1">
              <button>
                <CatIcon />
              </button>
              <button>
                <TwitterIcon />
              </button>
              <button>
                <FigmaIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="w-[600px]  justify-end items-center md:flex hidden">
          <img className="w-full  h-auto" src="./money.png" alt="" />
        </div>
      </div>
    </div>
  );
};

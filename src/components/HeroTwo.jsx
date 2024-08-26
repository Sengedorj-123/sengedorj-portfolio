import { Skills } from "./Skill";
import { ButtonUm } from "./svg";

export const HeroTwo = () => {
  return (
    <div className=" container m-auto py-[96px] px-[32px] bg-[#fff] dark:bg-black ">
      <div className="flex justify-center pb-[16px] ">
        <ButtonUm text="Skills" />
      </div>
      <div className="flex justify-center font-[400] text-[24px] text-[#4B5563] text-center">
        <h1>The skills, tools and technologies I am really good at:</h1>
      </div>
      <div className="pt-[48px] flex justify-between flex-wrap ">
        <Skills />
      </div>
      <div className="flex justify-between pt-[48px] flex-wrap gap-3"></div>
    </div>
  );
};

import { CIcon } from "./svg";

export const FooterYeah = () => {
  return (
    <div className="max-w-[1200px] m-auto px-[80px] py-[24px] lg-container flex justify-center">
      <div className="flex justify-center gap-[8px]">
        <div className="mt-[5px]">
          <CIcon />
        </div>
        <p className="text-[#4B5563]">
          2024 | Greetings with ❤️️ from Ulaanbaatar
        </p>
      </div>
    </div>
  );
};

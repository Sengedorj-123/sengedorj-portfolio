import {
  Header,
  Hero,
  HeroOne,
  HeroTwo,
  HeroThree,
  HeroFour,
  ContactMe,
  FooterYeah,
} from "@/components";
import { MobileXbutton, OnclickIcon, OnIcon } from "@/components/svg";
export default function app() {
  return (
    <div className="w-full dark:bg-black dark:text-white ">
      <Header />
      <Hero />
      <div className="w-screen  bg-[#F9FAFB] ">
        <HeroOne />
      </div>
      <HeroTwo />
      <div className="w-screen  bg-[#F9FAFB] dark:bg-[#111827]">
        <HeroThree />
      </div>
      <HeroFour />
      <ContactMe />
      <div className="w-screen  bg-[#F9FAFB] dark:bg-[#111827]">
        <FooterYeah />
      </div>
    </div>
  );
}
// div

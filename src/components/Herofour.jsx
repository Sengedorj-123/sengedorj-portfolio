import { ButtonUm, CopyIcon } from "./svg";

export const HeroFour = () => {
  return (
    <div className=" container m-auto py-[96px] rounded-[12px]  ">
      <div className="flex justify-center">
        <ButtonUm text="Work" />
      </div>
      <div className="flex justify-center font-[400] text-[24px] text-[#4B5563] text-center">
        <h1>Some of the noteworthy projects I have built:</h1>
      </div>
      <div className="pt-[48px] rounded-[12px] shadow-md p-[48px] flex md:justify-between flex-col ">
        <div className="md:flex md:justify-between rounded-[12px]  ">
          <div className="md:w-[50%]  bg-[#F9FAFB] rounded-t-lg  justify-center md:hidden ">
            <div className="w-full p-[48px] rounded-t-lg border-2 ">
              <img src="Picture.png" alt="" />
            </div>
          </div>
          <div className="md:w-[50%]  m-auto   bg-[#F9FAFB] md:flex hidden dark:bg-[#374151] rounded-l-lg  ">
            <div className="w-max h-auto p-[48px]">
              <img src="Picture.png" alt="" />
            </div>
          </div>
          <div className="md:w-[50%]  p-[48px] flex flex-col  md:rounded-r-lg md:rounded-b-[0px] rounded-b-lg dark:bg-[#4B5563]">
            <h1 className="font-[600]">UbCab</h1>
            <p className="pt-[24px] flex flex-wrap flex-row items-center justify-center ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="inline-flex gap-2 flex-wrap pt-[24px] ">
              <ButtonUm text="React" />
              <ButtonUm text="Next.Js" />
              <ButtonUm text="Typescript" />
              <ButtonUm text="Nest.js" />
              <ButtonUm text="PostgreSQL" />
              <ButtonUm text="Tailwindcss" />
              <ButtonUm text="Figma" />
              <ButtonUm text="Cypress" />
              <ButtonUm text="Storybook" />
              <ButtonUm text="Git" />
            </div>
            <button className="pt-[24px]">
              <CopyIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="pt-[48px] rounded-[12px] shadow-md p-[48px] flex md:justify-between flex-col ">
        <div className="md:flex md:justify-between rounded-[12px]  ">
          <div className="md:w-[50%]  bg-[#F9FAFB] rounded-t-lg  justify-center md:hidden ">
            <div className="w-full p-[48px] rounded-t-lg border-2 ">
              <img src="Picture.png" alt="" />
            </div>
          </div>
          <div className="md:w-[50%]  m-auto   bg-[#F9FAFB] md:flex hidden dark:bg-[#374151] rounded-l-lg  ">
            <div className="w-max h-auto p-[48px]">
              <img src="Picture.png" alt="" />
            </div>
          </div>
          <div className="md:w-[50%]  p-[48px] flex flex-col  md:rounded-r-lg md:rounded-b-[0px] rounded-b-lg dark:bg-[#4B5563]">
            <h1 className="font-[600]">UbCab</h1>
            <p className="pt-[24px] flex flex-wrap flex-row items-center justify-center ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="inline-flex gap-2 flex-wrap pt-[24px] ">
              <ButtonUm text="React" />
              <ButtonUm text="Next.Js" />
              <ButtonUm text="Typescript" />
              <ButtonUm text="Nest.js" />
              <ButtonUm text="PostgreSQL" />
              <ButtonUm text="Tailwindcss" />
              <ButtonUm text="Figma" />
              <ButtonUm text="Cypress" />
              <ButtonUm text="Storybook" />
              <ButtonUm text="Git" />
            </div>
            <button className="pt-[24px]">
              <CopyIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="pt-[48px] rounded-[12px] shadow-md p-[48px] flex md:justify-between flex-col ">
        <div className="md:flex md:justify-between rounded-[12px]  ">
          <div className="md:w-[50%]  bg-[#F9FAFB] rounded-t-lg  justify-center md:hidden ">
            <div className="w-full p-[48px] rounded-t-lg border-2 ">
              <img src="Picture.png" alt="" />
            </div>
          </div>
          <div className="md:w-[50%]  m-auto   bg-[#F9FAFB] md:flex hidden dark:bg-[#374151] rounded-l-lg  ">
            <div className="w-max h-auto p-[48px]">
              <img src="Picture.png" alt="" />
            </div>
          </div>
          <div className="md:w-[50%]  p-[48px] flex flex-col  md:rounded-r-lg md:rounded-b-[0px] rounded-b-lg dark:bg-[#4B5563]">
            <h1 className="font-[600]">UbCab</h1>
            <p className="pt-[24px] flex flex-wrap flex-row items-center justify-center ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="inline-flex gap-2 flex-wrap pt-[24px] ">
              <ButtonUm text="React" />
              <ButtonUm text="Next.Js" />
              <ButtonUm text="Typescript" />
              <ButtonUm text="Nest.js" />
              <ButtonUm text="PostgreSQL" />
              <ButtonUm text="Tailwindcss" />
              <ButtonUm text="Figma" />
              <ButtonUm text="Cypress" />
              <ButtonUm text="Storybook" />
              <ButtonUm text="Git" />
            </div>
            <button className="pt-[24px]">
              <CopyIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import { ButtonUm, UpIcon } from ".";

export const CardUm = () => {
  return (
    <div className="flex justify-center flex-col gap-12 mb-24 ">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="pt-[96px]">
          <ButtonUm text="Experience" />
        </div>
        <span>Here is a quick summary of my most recent experiences:</span>
      </div>

      <div className=" container mr-4 md:p-8 p-6 border rounded-xl flex flex-col md:gap-12 gap-4 shadow-md md:flex-row border-none dark:bg-[#1F2937] ">
        <div>
          <UpIcon />
        </div>
        <div className="flex md:hidden">Nov 2021 - Present</div>
        <div>
          <ul className="text-gray-900 text-xl list-disc font-semibold  leading-7 dark:text-white ">
            Sr. Frontend Developer
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li> Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
        </div>
        <div className="hidden md:flex">Nov 2021 - Present</div>
      </div>
      <div className=" container  mr-4 md:p-8 p-6 border rounded-xl flex flex-col md:gap-12 gap-4 shadow-md md:flex-row  border-none dark:bg-[#1F2937] ">
        <div>
          <UpIcon />
        </div>
        <div className="flex md:hidden">Nov 2021 - Present</div>
        <div>
          <ul className="text-gray-900 text-xl list-disc font-semibold leading-7 dark:text-white ">
            Sr. Frontend Developer
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li> Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
        </div>
        <div className="hidden md:flex">Nov 2021 - Present</div>
      </div>
      <div className="container  mr-4 md:p-8 p-6 border rounded-xl flex flex-col md:gap-12 gap-4 shadow-md md:flex-row  border-none dark:bg-[#1F2937] ">
        <div>
          <UpIcon />
        </div>
        <div className="flex md:hidden">Nov 2021 - Present</div>
        <div>
          <ul className="text-gray-900 text-xl list-disc font-semibold leading-7 dark:text-white ">
            Sr. Frontend Developer
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
        </div>
        <div className="hidden md:flex">Nov 2021 - Present</div>
      </div>
    </div>
  );
};

import {
  ButtonUm,
  CallIcon,
  CatIcon,
  CopiedIcon,
  EmailIcon,
  FigmaIcon,
  TwitterIcon,
} from "./svg";

export const ContactMe = () => {
  return (
    <div className="container m-auto py-[96px]">
      <div className="flex justify-center">
        <ButtonUm text="Get in touch" />
      </div>
      <div className="pt-[16px] flex justify-center">
        <p className="font-[300] text-[20px] leading-[28px] text-[#4B5563] text-center flex flex-wrap">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="flex justify-center pt-[48px] flex-row gap-[20px]">
        <div className="md:mt-[13px] mt-[8px]">
          <EmailIcon />
        </div>
        <p className="md:text-[36px] text-[30px] font-[600]">tom@pinecone.mn</p>
        <button>
          <CopiedIcon />
        </button>
      </div>
      <div className="flex justify-center pt-[16px] flex-row gap-[20px]">
        <div className="md:mt-[13px] mt-[8px]">
          <CallIcon />
        </div>
        <p className="md:text-[36px] text-[30px] font-[600]">+976 88112233</p>
        <button className="md:w-[32px] md:h-[32px] w-[24px] h-[24px]">
          <CopiedIcon />
        </button>
      </div>
      <div className="flex justify-center pt-[48px]">
        <p>You may also find me on these platforms!</p>
      </div>
      <div className="flex justify-center pt-[8px]">
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
  );
};

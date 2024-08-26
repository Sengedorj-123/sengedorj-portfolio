import { SkillIcon } from "./SkillIcon";
import {
  JavaIcon,
  TypeIcon,
  ReactIcon,
  NextIcon,
  NodeIcon,
  ExpressIcon,
  NestIcon,
  SockedIcon,
  SassIcon,
  TailIcon,
  FigmaaIcon,
  CypressIcon,
  StoryIcon,
  GitIcon,
} from "./svg";

export const Skills = () => {
  return (
    <div className="flex md:justify-center md:flex-wrap md:gap-16  justify-between flex-wrap gap-6  ">
      <SkillIcon Icon={<JavaIcon />} text={"dadasadsad"} />
      <SkillIcon Icon={<TypeIcon />} text={"Typescript"} />
      <SkillIcon Icon={<ReactIcon />} text={"React"} />
      <SkillIcon Icon={<NextIcon />} text={"Next.JS"} />
      <SkillIcon Icon={<NodeIcon />} text={"Node.JS"} />
      <SkillIcon Icon={<ExpressIcon />} text={"Express.JS"} />
      <SkillIcon Icon={<NestIcon />} text={"Socket.io"} />
      <SkillIcon Icon={<SockedIcon />} text={"Socket.io"} />
      <div className=" flex flex-col items-center">
        <img className="w-[62px] h-[64px]" src="./zza.png" alt="" />
        <p className="pt-[6px]">PostgreSQl</p>
      </div>
      <SkillIcon Icon={<SassIcon />} text={"saasss"} />
      <SkillIcon Icon={<TailIcon />} text={"Tailwindcss"} />
      <SkillIcon Icon={<FigmaaIcon />} text={"Figma"} />
      <SkillIcon Icon={<CypressIcon />} text={"Cypress"} />
      <SkillIcon Icon={<StoryIcon />} text={"Storybook"} />
      <SkillIcon Icon={<GitIcon />} text={"Git"} />
    </div>
  );
};

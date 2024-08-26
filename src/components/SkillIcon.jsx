export const SkillIcon = ({ Icon, text }) => {
  return (
    <div className="flex flex-col  items-center">
      {Icon}
      <p className="pt-[8px]">{text}</p>
    </div>
  );
};

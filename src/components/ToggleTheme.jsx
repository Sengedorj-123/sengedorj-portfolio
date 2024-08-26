import { useState } from "react";
import { SunIcon, MoonIcon } from "./svg";

export const ToggleTheme = () => {
  const [dark, setDark] = useState(false);
  const ToggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="text-black bg-white dark:bg-[#030712] dark:text-white">
      {dark ? (
        <button onClick={ToggleTheme}>
          <SunIcon />
        </button>
      ) : (
        <button onClick={ToggleTheme}>
          <MoonIcon />
        </button>
      )}
    </div>
  );
};

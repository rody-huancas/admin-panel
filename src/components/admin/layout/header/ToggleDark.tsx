import { useEffect, useState } from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

export const ToggleDark = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("dark-mode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode: boolean) => !prevMode);
  };

  useEffect(() => {
    const body = document.body;
    isDarkMode ? body.classList.add("dark") : body.classList.remove("dark");
    return () => {
      body.classList.remove("dark");
    };
  }, [isDarkMode]);

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? <RiMoonFill /> : <RiSunFill />}
    </button>
  );
};

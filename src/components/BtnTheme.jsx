import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const BtnTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="mx-2" onClick={toggleTheme}>
      <button
        className={`flex items-center w-12 p-1 rounded-full bg-black dark:bg-gray-700 transition-all duration-250 ${
          theme === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <span className="inline-block h-4 w-4 rounded-full bg-white dark:bg-black"></span>
      </button>
    </div>
  );
};

export default BtnTheme;

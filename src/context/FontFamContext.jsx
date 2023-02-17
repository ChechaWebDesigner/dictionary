import { createContext, useState } from "react";

const FontFamContext = createContext();

const initialFontFam = localStorage.getItem("fontFam") || "font-sans";

export const FontFamProvider = ({ children }) => {
  const [fontFam, setFontFam] = useState(initialFontFam);

  const changeFontFam = (newFontFam) => {
    setFontFam(newFontFam);
    localStorage.setItem("fontFam", newFontFam);
  };

  return (
    <FontFamContext.Provider value={{ fontFam, changeFontFam }}>
      {children}
    </FontFamContext.Provider>
  );
};

export default FontFamContext;

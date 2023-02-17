import { useContext } from "react";
import FontFamContext from "../context/FontFamContext";

const FrmSelectFam = () => {
  const { fontFam, changeFontFam } = useContext(FontFamContext);

  return (
    <select
      name="font-family"
      id="font-family"
      className="h-fit bg-transparent text-black dark:text-white outline-none"
      defaultValue={fontFam}
      onChange={(e) => changeFontFam(e.target.value)}
    >
      <option value="font-sans" className="dark:text-gray-300 dark:bg-gray-900">Sans</option>
      <option value="font-serif" className="dark:text-gray-300 dark:bg-gray-900">Serif</option>
      <option value="font-mono" className="dark:text-gray-300 dark:bg-gray-900">Mono</option>
    </select>
  );
};

export default FrmSelectFam;

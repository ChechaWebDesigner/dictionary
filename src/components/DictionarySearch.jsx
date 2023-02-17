import { useContext } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import FontFamContext from "../context/FontFamContext";
import ThemeContext from "../context/ThemeContext";
import Error404 from "../Pages/Error404";
import Home from "../Pages/Home";
import Search from "../Pages/Search";

const DictionarySearch = () => {
  const { theme } = useContext(ThemeContext);
  const { fontFam } = useContext(FontFamContext);

  return (
    <div className={`${theme} ${fontFam}`}>
      <div className="h-full min-h-screen w-full dark:bg-semi-black p-4">
        <HashRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dic/:word" element={<Search />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
};

export default DictionarySearch;

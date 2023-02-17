import { Link } from "react-router-dom";
import BookIcon from "./BookIcon";
import BtnTheme from "./BtnTheme";
import FormSearch from "./FormSearch";
import FrmSelectFam from "./FrmSelectFam";

const Header = () => {
  return (
    <header className="container sticky py-2 z-10 top-0 dark:bg-semi-black mx-auto md:w-3/4">
      <nav className="flex items-center py-2">
        <div className="icon">
          <Link to="/home">
            <BookIcon />
          </Link>
        </div>
        <div className="options-style flex gap-x-4 ml-auto">
          <FrmSelectFam />
          <BtnTheme />
        </div>
      </nav>
      <FormSearch />
    </header>
  );
};

export default Header;

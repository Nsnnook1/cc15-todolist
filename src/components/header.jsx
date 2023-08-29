import { FaHome } from "react-icons/fa";
import "./header.scss";
import Search from "./search";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <FaHome />
      </div>
      <div className="header__text">TodoList</div>
      <Search />
    </header>
  );
}

export default Header;

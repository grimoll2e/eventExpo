import Menu from "./Menu";
import MenuDropdown from "./MenuDropdown";

const menuitemlist = [
  {},
]

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-body-secondary shadow-sm py-0 fixed-top">
      <div className="d-flex container">
        <div className="flex-grow-1">
          <Menu />
        </div>
        <div>
          <MenuDropdown />
        </div>
      </div>
    </nav>
  );
}
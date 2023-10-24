import Menu from "./Menu";
import MenuDropdown from "./MenuDropdown";

const menuitemlist = [
  {},
]

export default function Header() {
  const size = 'lg'

  return (
    <nav className={`navbar navbar-expand-${size} bg-body-secondary shadow-sm py-0 fixed-top`}>
      <div className={`container-${size}`}>
        <a className="flex-grow-1" href="">iCon brand</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0 " id="navbarNav">
          <div className={`d-flex flex-column-reverse align-items-end flex-${size}-row align-items-${size}-center`}>
            <Menu />
            <MenuDropdown />  
          </div>
        </div>
      </div>
    </nav>
  );
}
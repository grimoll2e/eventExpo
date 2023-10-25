import { Link } from "react-router-dom";
import Menu from "./Menu";

const menuitemlist = [
  {},
]

export default function Header() {
  const size = 'lg'

  return (
    <nav className='bg-body-secondary shadow-sm my_navbar'>
      <div className="container-lg test_overlay">
        <div className="flex-grow-1 d-flex align-items-center">
          <Link to='/' className="nav-link fs-1 fw-bold">EventExpo</Link>
        </div>
        <div className=''>
          <Menu />
        </div>
      </div>
    </nav>
  );
}
// header = nav a=link ul=div
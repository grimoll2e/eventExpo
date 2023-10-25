import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function Header() {

  return (
    <nav className='bg-body-secondary shadow-sm position-sticky fixed-top'>
      <div className="container-lg my-0 d-flex position-relative my_navbar">
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

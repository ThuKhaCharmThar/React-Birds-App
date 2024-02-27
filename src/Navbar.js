import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav d-flex">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active fs-5 ">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/BirdList" className="nav-link fs-5 ">
                Birds
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

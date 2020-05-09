export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className=" collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <div className="line"></div>
            <a className="nav-link" href="#background">
              Home
            </a>
          </li>
          <li className="nav-item">
            <div className="line"></div>
            <a className="nav-link" href="#experiences">
              Experiences
            </a>
          </li>
          <li className="nav-item">
            <div className="line"></div>
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <div className="line"></div>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

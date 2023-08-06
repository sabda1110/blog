import './navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Whatsab<span className="nav__sublogo">.Blog</span>
        </a>
        <div className="nav__menu">
          <ul className={`nav__list ${isOpen ? 'open' : ''} grid`}>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Category
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                About Me
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-search nav__icon"></i>Search
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`nav__toggle`}
          onClick={() => setIsOpen((item) => !item)}
        >
          <div className={`nav__bar ${isOpen ? 'open' : ''} satu`}></div>
          <div className="nav__bar dua"></div>
          <div className={`nav__bar ${isOpen ? 'open' : ''} tiga`}></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

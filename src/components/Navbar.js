import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.#links = [
      {
        id: 0,
        path: '/',
        text: 'BOOKS',
      },
      {
        id: 1,
        path: '/categories',
        text: 'CATEGORIES',
      },
    ];
  }

  #links;

  render = () => (
    <nav className="navBar">
      <ul className="navBarCont">
        {this.#links.map((link) => (
          <li key={link.id} className="navItem">
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? 'navLink activeLink' : 'navLink')}
              exact="true"
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navbar;

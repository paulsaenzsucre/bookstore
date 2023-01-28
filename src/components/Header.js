import React from 'react';
import { HiUser } from 'react-icons/hi';
import { IconContext } from 'react-icons';
import Navbar from './Navbar';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => (
    <header className="header">
      <h1 className="montserrat-700 app-name">Bookstore CMS</h1>
      <Navbar />
      <IconContext.Provider
        value={{ color: 'var(--enfasis-color)', size: '1.5rem' }}
      >
        <button className="icon-button" type="button" aria-label="Login">
          <HiUser />
        </button>
      </IconContext.Provider>
    </header>
  )
}
export default Header;

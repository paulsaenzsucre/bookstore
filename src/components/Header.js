import React from 'react';
import { HiUser } from 'react-icons/hi';
import Navbar from './Navbar';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => (
    <header>
      <h1 className="appName">Bookstore CMS</h1>
      <Navbar />
      <button type="button" aria-label="Login"><HiUser /></button>
    </header>
  )
}
export default Header;

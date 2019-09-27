import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <Link href='/'>
          <a className='navbar-brand'>
            <i className='fab fa-react mr-2' />
            Next With Redux
          </a>
        </Link>

        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link href='/about'>
              <a className='nav-link pb-1'>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

import React, { Fragment } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main className='px-3' style={{ marginBottom: 70 }}>
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;

import React from 'react';

const Footer = () => {
  return (
    <footer
      className='row bg-primary text-white justify-content-center align-items-center'
      style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '105%',
        height: 50
      }}
    >
      &copy; All rights reserved {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;

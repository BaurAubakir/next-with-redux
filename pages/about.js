import React, { Fragment } from 'react';
import Head from 'next/head';

const About = () => {
  return (
    <Fragment>
      <Head>
        <title>About Page</title>
      </Head>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <h1 className='mt-4' style={{ fontSize: 28 }}>
              Next JS With Redux Boilerplate{' '}
              <span
                className='badge badge-danger'
                style={{ fontSize: 12, position: 'relative', top: -9 }}
              >
                v 1.0.0
              </span>
            </h1>
            <h5 className='mb-4'>What was developed on:</h5>
            <h5 className='mt-4'>Frontend:</h5>
            <ul className='list-group'>
              <li className='list-group-item'>Next</li>
              <li className='list-group-item'>React</li>
              <li className='list-group-item'>Redux</li>
              <li className='list-group-item'>Bootstrap</li>
            </ul>
            <h5 className='mt-4'>Other:</h5>
            <ul className='list-group'>
              <li className='list-group-item'>Font Awesome</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;

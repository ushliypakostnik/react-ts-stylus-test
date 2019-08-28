import React from 'react';

import logo from '../images/logo.svg';

const Page404 : React.SFC = () => {
  return (
    <div className="page__center-wrapper">
      <div className="page__center-message">
        <img
          className="page--page404__logo rotate"
          src={ logo }
          alt="logo"
        />
        <h1 className="page--page404__numbers">404</h1>
        <h1>Page Not Found!!!</h1>
      </div>
    </div>
  );
};

export default Page404;

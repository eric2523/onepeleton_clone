import React from 'react'
import { Link } from 'react-router-dom';

const PeletonLogo = () => (
    <Link className="logo-link" to="/login">
  <div className="main-logo-container">
      <img
        className="peleton-logo"
        src={window.logoURL}
        alt="peleton-logo"
      />
  </div>
    </Link>
);

export default PeletonLogo;
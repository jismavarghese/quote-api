import React from 'react';
import { Link } from 'react-router-dom';

const NavQuote = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">Add Quote</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link text-white" to="/search">Search Quote</Link>
            <Link className="nav-link text-white" to="/delete">Delete Quote</Link>
            <Link className="nav-link text-white" to="/view">View Quote</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavQuote;


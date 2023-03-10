import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className="navbar-wrapper pb-5">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Navbar
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/students">
                    Student
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-student">
                    Add Student
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <h1 className='text-center mt-5'>Online Student Portal</h1>
      </div>
    );
};

export default Navbar;
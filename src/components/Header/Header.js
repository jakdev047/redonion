import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col">
            <div className="head-logo">
              <Link to="/"><img src={logo} alt="hot onion" /></Link>
            </div>
          </div>
          <div className="col">
            <div className="header-right">
              <div className="d-flex">
                <button className="btn primary-btn">Sign up</button>
                <button className="btn">Login</button>
                <button className="btn"> 
                  <FontAwesomeIcon icon={faCartPlus} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
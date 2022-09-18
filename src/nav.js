import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import "./style.css"

export default function Nav() {
  const location = useLocation();
  const [mobileExpanded, setMobileExpanded] = useState(false);
  console.log(location.pathname);
  return (
    <div>
      <div>
        <h1 className="logo-header">
          ANIA OLCZYK
        </h1>
      </div>
      <div className="navbar-brand">
        <a role="button" className={`navbar-burger ${mobileExpanded ? "is-active" : ""}`} onClick={() => setMobileExpanded(!mobileExpanded)}aria-label="menu" aria-expanded="true">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        {/* <div role="button" className={`navbar-burger ${mobileExpanded ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"><NavLink activeClassName="navbar-in-active" className="navbar-in" to="/about">o mnie</NavLink></span>
          <span aria-hidden="true"><NavLink activeClassName="navbar-in-active" className="navbar-in" to="/music">muzyka</NavLink></span>
          <span aria-hidden="true"><NavLink activeClassName="navbar-in-active" className="navbar-in" to="/concerts">koncerty</NavLink></span>
          <span aria-hidden="true"><NavLink activeClassName="navbar-in-active" className="navbar-in" to="/contact">kontakt</NavLink></span>
        </div> */}
      </div>
      <nav className={`navbar navbar-ania ${mobileExpanded ? "is-active" : ""}`} role="navigation" aria-label="main navigation">
        <div id="navbar" className={`navbar-menu ${mobileExpanded ? "is-active" : ""}`}>
            <div className="navbar-start navbar-center">
              <div className="navbar-item navbar-ania-item">
                <NavLink activeClassName="navbar-in-active" onClick={() => setMobileExpanded(false)} className="navbar-in navbar-ania-item" to="/#/about">o mnie</NavLink>
              </div>
          
              <div className="navbar-item navbar-ania-item">
                <NavLink activeClassName="navbar-in-active" onClick={() => setMobileExpanded(false)} className="navbar-in" to="/#/music">muzyka</NavLink>
              </div>
          
              <div className="navbar-item navbar-ania-item">
                <NavLink activeClassName="navbar-in-active" onClick={() => setMobileExpanded(false)} className="navbar-in" to="/#/concerts">koncerty</NavLink>
              </div>
          
              <div className="navbar-item navbar-ania-item">
                <NavLink activeClassName="navbar-in-active" onClick={() => setMobileExpanded(false)} className="navbar-in" to="/#/contact">kontakt</NavLink>
              </div>
            </div>
          </div>
      </nav>
    </div>
  )
}
import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="navbar navbar-ania" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <h1 className="logo-header">ANIA OLCZYK</h1>
                </Link>
            </div>

            <div className="navbar-menu navbar-center">
                <div className="navbar-start">
                    <Link className="navbar-item navbar-ania-item navbar-in" to="/">
                        Strona główna
                    </Link>
                    <Link className="navbar-item navbar-ania-item navbar-in" to="/about">
                        O mnie
                    </Link>
                    <Link className="navbar-item navbar-ania-item navbar-in" to="/music">
                        Muzyka
                    </Link>
                    <Link className="navbar-item navbar-ania-item navbar-in" to="/concerts">
                        Koncerty
                    </Link>
                    <Link className="navbar-item navbar-ania-item navbar-in" to="/contact">
                        Kontakt
                    </Link>
                </div>
            </div>
        </nav>
    );
}

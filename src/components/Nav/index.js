import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <header className="flex-row">
            <h2 className="mx-2">
                <a href="/">
                    Patrick Sachleben
                </a>
            </h2>
            <nav>
                <Link className="nav-link active" aria-current="page" to="/">
                    About Me
                </Link>

                <Link className="nav-link" aria-current="page" to="/portfolio">
                    Portfolio
                </Link>

                <Link className="nav-link" aria-current="page" to="/resume">
                    Resume
                </Link>
            </nav>
        </header>
    )
}

export default Nav;

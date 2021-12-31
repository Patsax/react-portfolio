import React from "react";

function Nav() {


    return (
        <header className="flex-row">
            <h2 className="mx-2">
                <a href="/">
                    Patrick Sachleben
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#resume">
                            Resume
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#contact">
                            Contact Me
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;

import React from "react";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger container-fluid-nav text-center">
        <a className="navbar-brand text-center" href="#" style={{weight:"bolder", size:"20px"}}>
            Clicky Game
        </a>
        <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">
                        {props.guess} <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#" style={{weight:"bolder", size:"20px"}}>
                        Score: {props.score}
                    </a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">
                        Top Score: {props.topScore}
                    </a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;

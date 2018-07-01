import React from "react";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger container-fluid-nav text-center">

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

        <div class="navbar-collapse collapse justify-content-center" id="collapsingNavbar">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">{props.guess}  <span class="sr-only">Home</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Score: {props.score}</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Top Score: {props.topScore}</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;

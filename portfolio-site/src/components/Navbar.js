import React from "react";
import { Scrollchor } from "react-scrollchor";
import NavLogo from "../assets/images/nav-logo.jpg";

const Navbar = () => {
    return (
        <nav>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-4">
                        <div className="navbar-brand">
                            <img src={NavLogo} alt="Personal logo" id="nav-logo" />
                        </div>
                    </div>

                    <div className="col-8">
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <Scrollchor className="nav-link" to="#career-section">Career</Scrollchor>
                            </li>
                            <li className="nav-item">
                                <Scrollchor className="nav-link" to="#portfolio-section">Portfolio</Scrollchor>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
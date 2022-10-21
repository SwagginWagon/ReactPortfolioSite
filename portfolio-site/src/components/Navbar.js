import React from "react";
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
                                <a className="nav-link" href="#career-section">Dev Career</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio-section">Portfolio</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
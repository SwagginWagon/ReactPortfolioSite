import React from "react";
import { Scrollchor } from "react-scrollchor";

const Navbar = () => {
    return (
        <nav id="main-nav">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-4" id="brand-container">
                        <p>Dylan Wagner</p>
                    </div>

                    <div className="col-12 col-md-8">
                        <ul className="nav">
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
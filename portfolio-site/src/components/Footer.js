import React from "react";
import { Scrollchor } from "react-scrollchor";

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <nav>
                            <ul className="nav justify-content-start">
                                <li className="nav-item">
                                    <Scrollchor className="nav-link" to="">Home</Scrollchor>
                                </li>
                                <li className="nav-item">
                                    <Scrollchor className="nav-link" to="#career-section">Career</Scrollchor>
                                </li>
                                <li className="nav-item">
                                    <Scrollchor className="nav-link" to="#portfolio-section">Portfolio</Scrollchor>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="col-12 col-md-8 d-flex justify-content-end align-items-center">
                        <small>Copyright © <span id="copyright-year"></span> Dylan Wagner</small>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
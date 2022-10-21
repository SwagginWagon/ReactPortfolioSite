import React from "react";
import Memoji from "../assets/images/memoji-icon-gradient-min.png";

const IntroSection = () => {
    return (
        <section id="intro-section">
            <div className="container">
                <div id="intro">
                    <div className="row">
                        <div className="col">
                            <img src={Memoji} alt="Memoji Dylan" id="memoji-pic" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <h1 className="blue-text mt-4" id="name"><strong>Dylan Wagner</strong></h1>
                            <p>Web Developer...App Developer...Software Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
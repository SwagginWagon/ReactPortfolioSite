import React from "react";
import Project from "./Project";
import RJMImg from "../assets/images/rjm.marketing_min.png";
import EJImg from "../assets/images/experiencejackson.com_min.png";
import AEImg from "../assets/images/www.aladdinjackson.com_min.png";
import LJRImg from "../assets/images/www.ljross.com_min.png";
import FCImg from "../assets/images/frankenmuthcertified.com_min.png"

const PortfolioSection = () => {
    return (
        <>
            <section id="portfolio-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="blue-text text-center"><b>Some Work from RJM</b></h2>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column">
                            <Project url="http://rjm.marketing" image={RJMImg} alt="RJM Website" overlay="RJM" />
                            <Project url="http://experiencejackson.com" image={EJImg} alt="Experience Jackson Website" overlay="Experience Jackson" />
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column">
                            <Project url="http://www.aladdinjackson.com" image={AEImg} alt="Aladdin Electric Website" overlay="Aladdin Electric" />
                            <Project url="http://www.ljross.com" image={LJRImg} alt="LJ Ross Website" overlay="LJ Ross" />
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column">
                            <Project url="http://frankenmuthcertified.com"image={FCImg} alt="Frankenmuth Certified Website" overlay="Frankenmuth Certified" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioSection;
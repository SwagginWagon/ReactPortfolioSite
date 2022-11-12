import React from "react";

const CareerSection = () => {
    return (
        <>
            <section id="career-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="blue-text text-center"><b>Quick Dev Career Overview</b></h2>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <p className="year-range">2020-2022</p>
                            <h3 className="career-position">Software Developer at Roadload, Inc.</h3>
                            <p>
                                As a software developer for Roadload I develop features for a website and an iOS app.
                                I use C#/.Net, JavaScript/JQuery, Swift/SwiftUI on a daily basis. The project is a 
                                transportation management platform designed to take place of a traditional vanline.
                            </p>
                        </div>

                        <hr />

                        <div className="col-12">
                            <p className="year-range">2019-2020</p>
                            <h3 className="career-position">Web Developer at RJM</h3>
                            <p>
                                I worked as a web developer for RJM from June 2019 to August 2020.
                                There I worked alongside a fantastic graphic design team to build
                                and maintain websites for clients. I used various content management 
                                systems, PHP, JavaScript/JQuery, HTML/CSS, and Bootstrap to craft solutions
                                for customer needs. I gained experiernce in e-commerce, event websites, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CareerSection;
import React, { useEffect, useState, useCallback } from "react";

const CareerSection = () => {
    const [y, setY] = useState(window.scrollY);
    const roadload = document.getElementById("roadload");
    const rjm = document.getElementById("rjm");

    const handleNavigation = useCallback(
        e => {
          const window = e.currentTarget;
          if (y >= 150) { 
            roadload.style.transform = "translate(0%)";
          };

          if (y >= 500) {
              rjm.style.transform = "translate(0%)";
          };

          setY(window.scrollY);
        }, [y]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);
      
        return () => {
          window.removeEventListener("scroll", handleNavigation);
        };
      }, [handleNavigation]);

    return (
        <>
            <section id="career-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="blue-text text-center"><b>Developer Careers</b></h2>
                        </div>
                    </div>
                    <div className="row mt-4" style={{overflow: "hidden"}}>
                        <div className="col-12" id="roadload">
                            <p className="year-range">2020-2022</p>
                            <h3 className="career-position">Software Developer at Roadload, Inc.</h3>
                            <p>
                                As a software developer for Roadload I develop features for a website and an iOS app.
                                I use C#/.Net, JavaScript/JQuery, Swift/SwiftUI on a daily basis. The project is a 
                                transportation management platform designed to take place of a traditional vanline.
                            </p>
                        </div>

                        <hr />

                        <div className="col-12" id="rjm">
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
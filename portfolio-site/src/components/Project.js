import React from "react";

const Project = (props) => {
    return (
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            <img className="portfolio-img" src={props.image} alt={props.alt} />
            <div className="portfolio-img-overlay">
                <p className="overlay-text">{props.overlay}</p>
            </div>
        </a>
    );
};

export default Project;
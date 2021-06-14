import React from "react";
import './Description.css';

const Description = (props) => {
    return (
        <div className="description-container">
            <h2>{props.title}</h2>
            <ul>
                {props.description.map((item, index) => <li className="description-content" key={index}>{item}</li>)}
            </ul>
        </div>
    );
};

export default Description;
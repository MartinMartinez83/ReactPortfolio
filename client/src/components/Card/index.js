import React from "react";

export const Card = (props) => {
    console.log(props)
    return (
        <div className="col-md-5 m-3 card">
            <img src={props.image} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.info}</h6>
                <a href={props.site} className="card-link" target="_blank" rel="noopener noreferrer">Website</a>
                <a href={props.github} className="card-link" target="_blank" rel="noopener noreferrer">Github repo</a>
            </div>
        </div>
    );
}
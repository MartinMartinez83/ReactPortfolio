import React from "react";
import { Projects } from "../../utils/projects";
import { Card } from "../../components/Card";



function Portfolio() {

        return (
            <div className="container">
            <div className="row">
            {Projects.map((project) => (<Card key={project.id} {...project}/>))}
            </div>
            </div>
        )}
export default Portfolio;
import React, { useState } from "react";
import Project from "../Project"

function Portfolio() {
    const [projects] = useState([
        {},
        {},
        {},
        {}
    ])

    return(
        <>
            {projects.map((project, id) => {
                <Project projects={project} key={id}></Project>
            })}
        </>
    )
}

export default Portfolio;

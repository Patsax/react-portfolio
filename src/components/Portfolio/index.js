import React, { useState } from "react";
import Project from "../Project"

function Portfolio() {
    const [projects] = useState([
        {
            title: "Night Picks",
            github: "https://github.com/Patsax/Night-Picks",
            deploy: "https://patsax.github.io/Night-Picks/",
            description: "An app to help you decide on an evening's entertainment."
        },
        {
            title: "Taskinator",
            github: "https://github.com/Patsax/taskinator",
            deploy: "https://patsax.github.io/taskinator/",
            description: "A simple task managing app."
        },
        {
            title: "Git it Done",
            github: "https://github.com/Patsax/git-it-done",
            deploy: "https://patsax.github.io/git-it-done/",
            description: "An app to help developers search through GitHub repos to contribute to."
        },
        {
            title: "Work Day Scheduler",
            github: "https://github.com/Patsax/workday-planning",
            deploy: "https://patsax.github.io/workday-planning/",
            description: "A helpful app for planning your work day."
        }
    ])

    return(
        <>
        {projects.map((project, id) => (
            <Project projects={project} key={id}></Project>
        ))}
        
        </>
    )
}

export default Portfolio;

import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

function HomePage(){
const [ projectList, setProjectList ] = useState([]);

useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}projects`)
    .then((results) => {
        return results.json();
    })
    .then((data) => {
        setProjectList(data)
    });
    
}, []);

    return (
        <div className="projects-1">
            <div className="projects-1b">
                <div className="projects-2">
                { projectList.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData}/>

                })}
                </div>
            </div>
            
        </div>

    )
};

export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom';
import "./ProjectCard.css";

function ProjectCard(props) {
    const { projectData } = props;
    return (
        <div className='all-projects-1'>
            <Link to={`/project/${projectData.id}`}>
                <div className='all-projects'>
                    <div>
                        <img src={projectData.image}/>
                    </div>
                    <div className='all-projectsb'>
                        <h3>{projectData.title}</h3>
                        <h6>{projectData.wedding_date}</h6>
                        <p>{projectData.description}</p>
                    </div>
                </div>
            </Link>
        </div>

    )
};

export default ProjectCard;
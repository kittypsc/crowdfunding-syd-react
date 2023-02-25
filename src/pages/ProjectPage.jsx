import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaHeart } from 'react-icons/fa';
import { FaGift } from 'react-icons/fa';
import well from "../assets/well.png";


function ProjectPage(){
    const [projectData, setProjectData] = useState ({ pledges: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data)
        })
    }, []);

    return (
        <div>
            <div className="project-block">
            <div className="block1">
                <div>
                    <div>
                        <div className="block1-one"><img src={ well } className="well"/></div>
                    </div>
                    <div>
                        <div className="block1-two"><h2>{projectData.wedding_date}</h2></div>
                    </div>
                </div>

                <div>
                    <div>
                        <div className="block1-three"><h2>{projectData.partner_name1} and {projectData.partner_name2}</h2></div>
                    </div>
                    <div>
                        <div className="block1-four"><FaHeart className="heart-icon" /></div>
                    </div>
                </div>
            </div>
            <div className="block2">
                <div>
                    <div className="profilepic"><img src={projectData.image}/></div>
                    <div><h4>{projectData.title}</h4></div>
                    <div><h6>{projectData.description}</h6></div>
                    <div><h3>$XXXX raised of ${projectData.goal} goal</h3></div>
                    <div className="block2-btns">
                        <div className="body-btn"><button className="btn-3">Gift</button></div>
                        <div className="body-btn"><button className="btn-3">Share</button></div>
                    </div>
                    
                    
                </div>
                
            </div>

            </div>
            
            <div className="pledges-box">
                <div className="pledges">
                    <div className="pledges-block1">
                        <h3>Gifts from friends and family:</h3>    
                    </div>
                    <div className="pledges-block2">
                         <div className="pledges-block2a">
                            <ul className="pledge-list">
                                {projectData.pledges.map((pledgesData, key) => {
                                    return (
                                    <div className="pledge-user-block">
                                        <div className="user-icon-background"><FaGift className="user-icon" /></div>
                                        <div>
                                            
                                            <div className="user-pledge-background1" key={key}>
                                            <div>You have received a gift!</div>

                                            </div>
                                            <div className="user-pledge-background2" key={key}>
                                                 ${pledgesData.amount}
                                            </div>
                                        </div>
                                    </div>
                                            )
                                    })}

                            </ul>
                         </div>
                    </div>
                </div>
            </div>
            
        </div>
        

    )
};

export default ProjectPage;
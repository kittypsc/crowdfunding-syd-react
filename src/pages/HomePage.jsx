import React, { useState, useEffect } from "react";
import main from  "../assets/main.png";
import well from "../assets/well.png";
import { Link } from 'react-router-dom';

function HomePage(){


    return (
            <div>
                <div className="body"><img src={ main } className="main" alt="graphic" /></div>
                <div className="body-text"><p>Want to create a wishin well?</p></div>
                <div className="body-btn"><button className="btn-2"><Link to="/createanaccount"><img src={ well } className="icon-well"/>Create a Wishin Well</Link></button></div>
                
            </div>
    
        )
};

export default HomePage;
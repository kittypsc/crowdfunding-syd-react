import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import Logo from "../../assets/logo3.png"
import ProjectCard from "../../components/ProjectCard";
import { FaHeart } from 'react-icons/fa';

function Nav() {
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

    const ShowLoginButton = window.localStorage.getItem("token") === null;
    let loginStuff;
    if (ShowLoginButton) {
        loginStuff = (<div>
            <Link to="/login">Login</Link>
            <button className="btn-1"><Link to="/createanaccount">Create an account</Link></button>
        </div>)
    }
    else {
        loginStuff = (<div>
            {/* <Link to='/project/${projectData.id}'>My Wishin Well</Link> */}
            <button className="btn-1"><Link to="/explore"><FaHeart className="heart-icon2" />Enter Wishin Well</Link></button>
            {/* <Link to="/reviews">Reviews</Link> */}
            
        </div>)
    }
    return (
        <nav className="navbar">
                    <Link to="/"><img src={ Logo } className="logo" alt="logo" /></Link>
                    <div className="links">
                    {/* <Link to="/explore">Explore</Link>
                    <Link to="/reviews">Reviews</Link> */}
                    
                    { loginStuff }
                    
                    </div>

            
        </nav>
    )
};

export default Nav;
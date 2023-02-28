import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";
import well from "../../assets/well.png";
import Logo from "../../assets/logo3.png"
// import ProjectCard from "../../components/ProjectCard";
import { FaHeart } from 'react-icons/fa';

function Nav() {
    // const [ projectList, setProjectList ] = useState([]);
    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_API_URL}projects`)
    //     .then((results) => {
    //         return results.json();
    //     })
    //     .then((data) => {
    //         setProjectList(data)
    //     });
        
    // }, []);

    const ShowLoginButton = window.localStorage.getItem("token") === null;

    const navigate = useNavigate()
    const onLogOut = (event) =>{
        event.preventDefault()
        localStorage.clear()
        navigate("/")
    }
    let loginStuff;
    if (ShowLoginButton) {
        loginStuff = (<div>
            <div className="nav-btns">
            <Link to="/login">Login</Link>
            <button className="btn-1"><Link to="/createanaccount">Create an account</Link></button>
            </div>
            
        </div>)
    }
    else {
        loginStuff = (<div>
        
            <button className="btn-1"><Link to="/explore"><FaHeart className="heart-icon2" />See Wishin Wells</Link></button>
            <button className="btn-2"><Link to="/project-form"><img src={ well } className="icon-well"/>Create a Wishin Well</Link></button>
            <button className="btn-7" onClick={onLogOut}> Logout</button>
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
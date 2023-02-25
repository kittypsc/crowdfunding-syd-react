import React, { useState }from 'react';
import { useNavigate } from "react-router-dom";

function NewProjectForm() {
    // const [ credentials, setCredentials ] = useState({
    //     username: '',
    //     password: '',
    // }); 
    const navigate = useNavigate();

        
    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };
   
    const handleSubmit = (event) => {
        event.preventDefault();
        // if (credentials.username && credentials.password) {
            postData().then((response) => {
            window.localStorage.setItem("token", response.token);
            navigate("/explore");
            });
        // }
    };

const postData = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}projects/`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        // body: JSON.stringify(credentials)
    });
    return response.json();
    };


    return (
        <form>
            
            <div>
                <label htmlFor='title'>title:</label>
                <input onChange={handleChange} type="text" id='title' placeholder='Name for wishin well'></input>
            </div>
            
            <div>
                <label htmlFor='partner_name1'>partner name1:</label>
                <input onChange={handleChange} type="text" id='partner_name1' placeholder='Enter name'></input>
            </div>

            <div>
                <label htmlFor='partner_name2'>partner name2:</label>
                <input onChange={handleChange} type="text" id='partner_name2' placeholder='Enter name'></input>
            </div>
            <div>
                <label htmlFor='wedding_date'>wedding_date:</label>
                <input onChange={handleChange} type="text" id='wedding_date' placeholder='Enter date'></input>
            </div>
            <div>
                <label htmlFor='description'>description:</label>
                <input onChange={handleChange} type="text" id='description' placeholder='What the wishin well is for?'></input>
            </div>
            <div>
                <label htmlFor='goal'>goal: </label>
                <input onChange={handleChange} type="text" id='goal' placeholder='Enter amount of goal'></input>
            </div>
            <div>
                <label htmlFor='image'>photo:</label>
                <input onChange={handleChange} type="text" id='image' placeholder='Enter image url'></input>
            </div>
            
            
            <button type="submit" onClick={handleSubmit}>Login</button>
        </form>

    )
};

export default NewProjectForm;
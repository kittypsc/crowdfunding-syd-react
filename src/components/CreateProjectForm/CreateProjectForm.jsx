import React, { useState }from 'react';
import { useNavigate } from "react-router-dom";
import "./CreateProjectForm.css";

function NewProjectForm() {
    const [ FormData, setFormData ] = useState({
        title: '',
        partner_name1: '',
        partner_name2: '',
        wedding_date: '',
        description: '',
        goal: '',
        photo: '',
        is_open: true,
        
    }); 
    const navigate = useNavigate();

        
    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };
   
    const handleSubmit = (event) => {
        event.preventDefault();

            postData().then((response) => {
            console.log(response)
            navigate(`/project/${response.id}`);
            // back-tick is used when you need add with string with a value
            });

    };

const postData = async () => {
    const token = window.localStorage.getItem("token");
    const response = await fetch(`${import.meta.env.VITE_API_URL}projects/`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `token ${token}`,
        },
        body: JSON.stringify(FormData) 
        // this is the line to pass in the state and then sent back to api
    });
    return response.json();
    };


    return (
        <form>
            <div className="projects-1">
                <div className="projects-1b">
                    <div className="projects-2">
                        <div className="projects-3">
                            <div>Enter information for your Wishin Well:</div>
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
                            <input onChange={handleChange} type="number" id='goal' placeholder='Enter amount of goal'></input>
                        </div>
                        <div>
                            <label htmlFor='image'>photo:</label>
                            <input onChange={handleChange} type="url" id='image' placeholder='Enter image url'></input>
                        </div>
            
            
                        <button type="submit" onClick={handleSubmit}>Save</button>

                        </div>
                        

                     </div>
                </div>
            </div>
            
            
        </form>

    )
};

export default NewProjectForm;
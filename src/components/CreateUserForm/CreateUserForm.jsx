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
            <div className="new-proj-1">
                <div className="new-proj-1b">
                    <div className="new-proj-2">
                        <div className="new-proj-3">
                            <div className="new-proj-3b">
                                <h2>My Wishin Well</h2>
                                <p>Please fill out the form below:</p>
                            </div>
                            <div className="new-proj-4a">
                                <label htmlFor='title'>Name for Well:  </label>
                                <input onChange={handleChange} type="text" id='title' placeholder='Name for wishin well'></input>
                            </div>
                             <div className="new-proj-4a">
                                <label htmlFor='partner_name1'>Partner Name1:</label>
                                <input onChange={handleChange} type="text" id='partner_name1' placeholder='Enter name'></input>
                            </div>
                            <div className="new-proj-4a">
                                <label htmlFor='partner_name2'>Partner Name2:</label>
                                <input onChange={handleChange} type="text" id='partner_name2' placeholder='Enter name'></input>
                            </div>
                            <div className="new-proj-4a">
                                <label htmlFor='wedding_date'>Wedding Date:</label>
                                <input onChange={handleChange} type="text" id='wedding_date' placeholder='Enter date'></input>
                            </div>
                            <div className="new-proj-4a">
                                <label htmlFor='description'>Purpose of Well:</label>
                                <input onChange={handleChange} type="text" id='description' placeholder='Description'></input>
                            </div>
                            <div className="new-proj-4a">
                                <label htmlFor='goal'>Target Amount $</label>
                                <input onChange={handleChange} type="number" id='goal' placeholder='Enter amount of goal'></input>
                            </div>
                            <div className="new-proj-4a">
                                <label htmlFor='image'>Profile Photo:</label>
                                <input onChange={handleChange} type="url" id='image' placeholder='Paste image url'></input>
                            </div>
            
            
                            <div className="new-proj-4g"><button type="submit" onClick={handleSubmit} className="btn-4">Save</button></div>

                        </div>
                        

                     </div>
                </div>
            </div>
            
            
        </form>

    )
};

export default NewProjectForm;
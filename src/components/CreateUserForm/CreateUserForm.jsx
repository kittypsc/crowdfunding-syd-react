import React, { useState }from 'react';
import { useNavigate } from "react-router-dom";
import "./CreateUserForm.css";

function NewUserForm() {
    const [ FormData, setFormData ] = useState({
        username: '',
        email: '',
        password: '',
        first_name: '',
        last_name: '',   
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
            navigate(`/login`);
            // back-tick is used when you need add with string with a value
            });

    };

const postData = async () => {
    // const token = window.localStorage.getItem("token");
    const response = await fetch(`${import.meta.env.VITE_API_URL}users/`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            // "Authorization": `token ${token}`,
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
                                <h2>My User Account</h2>
                                <p>Please fill out the form below:</p>
                            </div>
                            <div className="new-proj-4a">
                                <label htmlFor='username'>Username:  </label>
                                <input onChange={handleChange} type="text" id='username' placeholder='Enter username'></input>
                            </div>
                             <div className="new-proj-4a">
                                <label htmlFor='Email'>Email:</label>
                                <input onChange={handleChange} type="text" id='email' placeholder='Enter email'></input>
                            </div>
                            <div className="new-proj-4a">
                                <label htmlFor='password'>Password:</label>
                                <input onChange={handleChange} type="text" id='password' placeholder='Enter password'></input>
                            </div>
                            <div className="new-proj-4a">
                                <label htmlFor='first_name'>First Name:</label>
                                <input onChange={handleChange} type="text" id='first_name' placeholder='Enter first name'></input>
                            </div>
                            <div className="new-proj-4a">
                                <label htmlFor='last_name'>Last Name:</label>
                                <input onChange={handleChange} type="text" id='last_name' placeholder='Enter last name'></input>
                            </div>
            
                            <div className="new-proj-4g"><button type="submit" onClick={handleSubmit} className="btn-4">Save</button></div>

                        </div>
                        

                     </div>
                </div>
            </div>
            
            
        </form>

    )
};

export default NewUserForm;
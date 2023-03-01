import React, { useState }from 'react';
import { useNavigate } from "react-router-dom";
import "./CreatePledgeForm.css";

function NewPledgeForm() {
    const [ FormData, setFormData ] = useState({
        amount: '',
        message: '',
        anonymous: false,
        project: '',
        
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
            navigate(`/explore`);
            // back-tick is used when you need add with string with a value
            });

    };

const postData = async () => {
    // const token = window.localStorage.getItem("token");
    const response = await fetch(`${import.meta.env.VITE_API_URL}pledges/`, {
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
                                <label htmlFor='gift'>Amount: $</label>
                                <input onChange={handleChange} type="number" id='gift' placeholder='Enter gift amount'></input>
                            </div>
                             <div className="new-proj-4a">
                                <label htmlFor='message'>Message:</label>
                                <input onChange={handleChange} type="text" id='message' placeholder='Enter message'></input>
                            </div>
                            <div className="new-proj-4a">
                                <label htmlFor='project'>Project:</label>
                                <input onChange={handleChange} type="text" id='project' placeholder='Enter project number'></input>
                            </div>
                            
            
                            <div className="new-proj-4g"><button type="submit" onClick={handleSubmit} className="btn-4">Save</button></div>

                        </div>
                        

                     </div>
                </div>
            </div>
            
            
        </form>

    )
};

export default NewPledgeForm;
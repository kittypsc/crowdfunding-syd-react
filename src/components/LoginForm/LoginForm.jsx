import React, { useState }from 'react';
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {
    const [ credentials, setCredentials ] = useState({
        username: '',
        password: '',
    }); 
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
        if (credentials.username && credentials.password) {
            postData().then((response) => {
            window.localStorage.setItem("token", response.token);
            navigate("/explore");
            });
        }
    };

const postData = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}api-token-auth/`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials)
    });
    return response.json();
};

// const editData = async () => {
//     const response = await fetch(`${import.meta.env.VITE_API_URL}projects/5/`, {
//         method: "put",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(credentials)
//     });
//     return response.json();
// };

    return (
        <form>
            
            <div className="login-1">
                <div className="login-1b">
                    <div className="login-2">
                        <div className="login-3">
                            <div className="login-3b">
                                <h3>My Login Details</h3>
                            </div>
                            <div className="login-4a">
                                <label htmlFor='username'>Username:</label>
                                <input onChange={handleChange} type="text" id='username' placeholder='Enter username'></input>
                            </div>
            
                            <div className="login-4a">
                                <label htmlFor='password'>Password:</label>
                                <input onChange={handleChange} type="password" id='password' placeholder='Enter password'></input>
                            </div>
                            <div className="login-4b">
                                <button type="submit" onClick={handleSubmit} className="btn-4">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
};

export default LoginForm;
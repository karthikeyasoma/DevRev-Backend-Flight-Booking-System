import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const  [role,setRole]  = useState('');
    const  [name,setName] = useState('Admin');
    const navigate = useNavigate();

    const handleSubmit = async () => {
         let valid = "false";
         console.log(role);
         console.log(email);
         await axios.post("http://localhost:3001/api/get_user",{
            email:email,
            pass:pass,
            name:name,
            role:role,
        }).then((response) => { 
           if(response.data[0].count !== 0)
           {

            console.log(`/${role}_page`);
            navigate(`/${role}_page`, { state: { email: email } });

           }
           else
           {
             alert("not valid");
           }
        }).catch((error) => {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        });  
        
    }

    return (
        <div className="auth-form-container" >
            <h2>Login</h2>
            <div className="login-form">
                 <label htmlFor="role">role</label>
                 <select id="user-type" name="user-type" value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="admin">admin</option>
                 <option value="user">user</option>
               </select>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="button" onClick={handleSubmit}>Log In</button>
            </div>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}

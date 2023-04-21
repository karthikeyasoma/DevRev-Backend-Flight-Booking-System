import React, { useState } from "react";
import axios from 'axios';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [role,setRole] = useState('Admin');

    const handleSubmit1 = (e) => {
        axios.post("http://localhost:3001/api/insert",{
            email:email,
            pass:pass,
            name:name,
            role:role,
        }).then(() => {
            alert("Success");
        }).catch((error) => {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        });
    }
    

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit1}>
        <select id="role" name="role" value={role} onChange={(e) => setRole(e.target.value) }>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}
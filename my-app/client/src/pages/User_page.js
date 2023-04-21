import React from "react";
import { Route, useNavigate } from "react-router-dom";
import {Link,useLocation}  from "react-router-dom";
export const User_page = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = (location.state.email); 
  const username = email.split("@")[0];
  const Logout = () => {
    navigate("/");
  };

  const UserInformation = () => {
    navigate("./UserInfo",{ state: { email : email } });
  };

  const BookFlight = () => {
    navigate("./Search_Flight",{ state: { email : email }});
  };
  
  return (
    <div className="App">
      <div>
    
        <h1>Options For The User {username}</h1>
      
        <button className="button" type="button" onClick={() => Logout()}>
          Logout
        </button>
        <button
          className="button"
          type="button"
          onClick={() => UserInformation()}
        >
          User Information
        </button>
        <button className="button" type="button" onClick={() => BookFlight()}>
          Book Flight
        </button>
        
       
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link,useLocation}  from "react-router-dom";
import './UserInfo.css';

export const UserInfo = (props) => {
  const [userData, setUserData] = useState([]);
  const location  = useLocation()
  useEffect(() => {
    axios.post("http://localhost:3001/api/user_information",{
      email: location.state.email
    }).then((response) => {
      setUserData(response.data);
    }).catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    });
  }, [location.state.email]);

  const username = location.state.email.split("@")[0];

  return (
    <div className="App">
      <h1>{username}'s Flight Bookings</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Flight Name</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
            <th>Fare</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.flight_name}</td>
                <td>{data.flight_from}</td>
                <td>{data.flight_to}</td>
                <td>{data.date}</td>
                <td>{data.flight_fare}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import {Link,useLocation}  from "react-router-dom";
const SearchResult = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
  margin-bottom: 10px;
`;

const BookButton = styled.button`
  margin-top: 10px;
`;


export const Search_Flight = (props) => {
  const location = useLocation();
  const email = (location.state.email); 
  
  const [date, setDate] = useState('');
  const [time,setTime]  = useState('');
  const [from, setFrom] = useState('');
  const [to,setTo]      = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async () => {
    await axios.post("http://localhost:3001/api/search_flights",{
      flight_from: from,
      flight_to: to,
      departure: date,
      time: time,
    }).then((response) => { 
      setResults(response.data);
    }).catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    });  
  }

  const handleBook = (result) => {
        const date_format = new Date(date).toISOString().substring(0, 10);
        axios.post("http://localhost:3001/api/book_id",{
        user_mail : email,
        flight_name: result.flight_name,
        flight_to:result.flight_to,
        flight_from: result.flight_from,
        date:date_format,
        flight_fare:result.flight_fare,
      }).then((response) => { 
        setResults(response.data);
      }).catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      });  
    }
  

  return (
    <div className="auth-form-container">
      <div className="login-form">
        <h2>Search Flight</h2>
        <label htmlFor="from">from</label>
        <input value={from} onChange={(e) => setFrom(e.target.value)} type="text" placeholder="tamil nadu" name="from" />
        <label htmlFor="to">to</label>
        <input value={to} onChange={(e) => setTo(e.target.value)} type="text" placeholder="telangana" name="to" />
        <label htmlFor="date">date</label>
        <input value={date} onChange={(e) => setDate(e.target.value)} type="text" placeholder="date" name="date" />
        <label htmlFor="time">time</label>
        <input value={time} onChange={(e) => setTime(e.target.value)} type="text" placeholder="time" name="" />
      </div>
      <button type="button" onClick={handleSubmit}>Search</button>
      {results.map((result) => (
        <SearchResult key={result.id}>
          <p>Flight name : {result.flight_name}</p>
          <p>Flight from :{result.flight_from}</p>
          <p>Flight to :{result.flight_to}</p>
          <p>Flight date :{result.date_departure}</p>
          <p>Flight fare:{result.flight_fare}</p>
          <p>Flight available seats:{result.available}</p>
          <BookButton onClick={() => handleBook(result)}>Book</BookButton>
        </SearchResult>
      ))}
    </div>
  );
};

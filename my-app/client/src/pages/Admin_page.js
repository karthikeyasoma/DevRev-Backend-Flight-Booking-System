import React from "react";
import { Route, useNavigate } from "react-router-dom";

export const Admin_page = () => {
  const navigate = useNavigate();

  const Logout = () => {
    navigate("/");
  };

  const AddFlight = () => {
    navigate("./addFlight");
  };

  const RemoveFlight = () => {
    navigate("./removeFlight");
  };

  const SearchFlight = () => {
    navigate("./searchFlight");
  };

  return (
    <div className="App">
      <div>
        <h1>Options For The Admin</h1>
        <button className="button" onClick={Logout}>
          Logout
        </button>
        <button className="button" onClick={AddFlight}>
          Add Flight
        </button>
        <button className="button" onClick={RemoveFlight}>
          Remove Flight
        </button>
        <button className="button" onClick={SearchFlight}>
          Search Flight
        </button>
      </div>
    </div>
  );
};

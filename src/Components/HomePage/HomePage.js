import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homePage__container">
      <h1>Queue management system</h1>
      <div className="homePage">
        <Link className="home__button" to="/welcome">
          Welcome
        </Link>
        <Link className="home__button" to="/waiting-list">
          Waiting List
        </Link>
        <Link className="home__button" to="/server">
          Server{" "}
        </Link>
        <Link className="home__button" to="/admin">
          Admin{" "}
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

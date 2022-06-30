import React from "react";
// import { Link } from "react-router-dom";
import "./Connexion.css";
import logo from "../assets/logo-apside-blanc.svg";
import Motion from "../components/Motion";

function Connexion() {
  return (
    <div className="connexion-container">
      <h2>INTO</h2>
      <div className="div-logo-connexion">
        <img className="logo-connexion" src={logo} alt="logo apside bleu" />
        <h4
          className="log-button"
          style={{ color: "white", marginLeft: "510px", marginTop: "-130px" }}
        >
          CONNEXION
        </h4>
        <h4
          className="log-button"
          style={{ color: "white", marginLeft: "903px", marginTop: "180px" }}
        >
          REGISTER
        </h4>
      </div>

      <Motion />
    </div>
  );
}

export default Connexion;

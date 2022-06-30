/* eslint-disable react/prop-types */
import React from "react";
import "./ProjectCard.css";
import oblivion from "../assets/oblivion.jpg";

export default function ProjectCard({ data }) {
  // if (data != undefined) {
  return (
    <div>
      <div className="card-container">
        <div>
          <img className="projectImage" src={oblivion} alt="project-pic" />
        </div>
        <div className="projectName">
          <h1>{data?.projectName}</h1>
        </div>
        <div className="projectOwner">
          <p>{data?.owner}</p>
        </div>
        <div className="projectOffice">
          <p>{data?.ownerOffice}</p>
        </div>
        <div className="description">
          <p>{data?.description}</p>
        </div>
        <div className="startDate">
          <p>{data?.startDate}</p>
        </div>
      </div>
    </div>
  );
  //    } else {
  //     <div>
  //      <p>No project matched the research criteria</p>
  //     </div>
  //    }
}

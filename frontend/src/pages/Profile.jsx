import React from "react";
import Fake2 from "../assets/FakeProject2.jpg";
//  import { Link } from "react-router-dom";
//  import SearchBar from "../components/SearchBar";
// import ProjectCard from "../components/ProjectCard";
// import ProjectsList from "../data/ProjectsList";
import "./Profile.css";
import NavBar from "../components/NavBar";


export default function Profile() {
  return (
  <NavBar />
    <div>
      <h2>Upcoming Projects :</h2>
      <div className="ButtonMoreProjects">
        <button type="button" style={{ backgroundColor: "grey" }}>
          More projects
        </button>
        <div className="FakeImage2">
          <img src={Fake2} alt="ImageFake" />
        </div>
        <div className="Content">
          <p>
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <div>
        <h2>Projects in progress :</h2>

        <div className="ButtonMoreProjects">
          <button type="button" style={{ backgroundColor: "grey" }}>
            More projects
          </button>

          <div className="FakeImage2">
            <img src={Fake2} alt="ImageFake" />
          </div>

          <div className="Content">
            <p>
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>

        <h2>Finished Projects :</h2>

        <div className="ButtonMoreProjects">
          <button type="button" style={{ backgroundColor: "grey" }}>
            More projects
          </button>

          <div className="FakeImage2">
            <img src={Fake2} alt="ImageFake" />
          </div>

          <div className="Content">
            <p>
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

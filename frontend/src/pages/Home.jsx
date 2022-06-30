import React, { useState } from "react";
// import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import ProjectCard from "../components/ProjectCard";
import ProjectsList from "../data/ProjectsList";
import "../components/ProjectCard.css";

export default function Home() {
  const [search, setSearch] = useState(false);
  const [searchTags, setSearchTags] = useState("");
  const [searchCity, setSearchCity] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(!search);
  };

  return (
    <div className="home-container">
      <div>
        <SearchBar
          searchTags={searchTags}
          setSearchTags={setSearchTags}
          searchCity={searchCity}
          setSearchCity={setSearchCity}
        />
      </div>

      <button type="submit" onClick={handleSearch}>
        Search 🚀
      </button>

      {/* {projects.filter((project) => project.ownerOffice === searchCity)
        .map((project) => <ProjectCard data={project} />)} */}

      <h2>Upcoming Projects :</h2>
      <div className="futureProjContainer">
        <ProjectCard data={ProjectsList[3]} />
        <ProjectCard data={ProjectsList[4]} />
        <ProjectCard data={ProjectsList[1]} />
      </div>
      {/* <Link to="/projects/upcoming"> */}
      <button type="button">More projects</button>
      {/* </Link> */}

      <h2>Projects in progress :</h2>
      <div className="pastProjContainer">
        <ProjectCard data={ProjectsList[5]} />
        <ProjectCard data={ProjectsList[7]} />
        <ProjectCard data={ProjectsList[9]} />
      </div>
      {/* <Link to="/projects/inprogress"> */}
      <button type="button">More projects</button>
      {/* </Link> */}

      <h2>Finished Projects :</h2>
      <div className="presentProjContainer">
        <ProjectCard data={ProjectsList[5]} />
        <ProjectCard data={ProjectsList[3]} />
        <ProjectCard data={ProjectsList[1]} />
      </div>
      {/* <Link to="/projects/finished"> */}
      <button type="button">More projects</button>
      {/* </Link> */}
    </div>
  );

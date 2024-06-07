import React, { useState } from 'react';
import ProjectsList from './Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import GitHubBtn from './GitHubBtn';

const ProjectsInfo = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const githubLink = "https://github.com/Charlotte-Lawrence";

  return (
    <section className='projectsSection' id="projects">
      <h2 className="centered">Projects</h2>
      <div className="projectsContent">
        <p className="centered">
          These are just a few projects I have worked on.
          <br /><br />
          I am still working to add GitHub links to each project, but for now you can check out my GitHub here:
        </p>
        <GitHubBtn link={githubLink}></GitHubBtn>
        
      </div>
      <div className="filter rounded">
        <label htmlFor="language-filter">Filter by programming language: </label>
        <select id="language-filter" onChange={(e) => setSelectedLanguage(e.target.value)}>
          <option value="All">All</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="MATLAB">MATLAB</option>
        </select>
      </div>
      <div className="grid-container">
        <ProjectsList selectedLanguage={selectedLanguage} />
      </div>
    </section>
  );
};

export default ProjectsInfo;

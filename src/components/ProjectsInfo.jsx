import React, { Component } from 'react';
import ProjectsList from './Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export default class ProjectsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
  }

  handleLanguageFilter = (event) => {
    this.setState({ selectedLanguage: event.target.value });
  }

  render() {
    const { selectedLanguage } = this.state;
    const githubLink = "https://github.com/Charlotte-Lawrence";

    return (
      <section className='projectsSection' id="projects">
        <h2 className="centered">Projects</h2>
        <div className="projectsContent">
        <div className="centered">
          <p>
            These are just a few projects I have worked on.
            <br /><br />
            I am still working to add GitHub links to each project, but for now you can check out my GitHub here:
          </p>
        </div>
          <a href={githubLink}>
              <button className="git-button" title="GitHub">
                  <FontAwesomeIcon icon={faGithub}/>
              </button>
          </a>
        </div>
        <div className="filter rounded">
          <label htmlFor="language-filter">Filter by programming language: </label>
          <select id="language-filter" onChange={this.handleLanguageFilter}>
            <option value="All">All</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="MATLAB">MATLAB</option>
          </select>
        </div>
        <div className="grid-container">
          <ProjectsList selectedLanguage = {selectedLanguage}/>
        </div>
      
      </section>
    )
  }
}

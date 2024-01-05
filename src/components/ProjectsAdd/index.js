//Project 

import React, { useState } from 'react';
import "./index.css"

function ProjectAdd() {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  return (
    <div>
      <div className="projects-section" id="projectsSection">
        <div>
          <h1 className="projects-heading">Projects</h1>
        </div>

        

        {/* Add Project Form */}
        <div className="add-project-form">
          <h2>Add Project</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const project = {
                name: e.target.name.value,
                image: e.target.image.value,
                description: e.target.description.value,
                github: e.target.github.value,
                link: e.target.link.value,
              };
              addProject(project);
              // Clear the form fields
              e.target.reset();
            }}
          >
            <label>
              Project Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Project Image URL:
              <input type="text" name="image" required />
            </label>
            <label>
              Project Description:
              <textarea name="description" required />
            </label>
            <label>
              Github Link:
              <input type="text" name="github" required />
            </label>
            <label>
              Project Link:
              <input type="text" name="link" required />
            </label>
            <button className="sumbitBtn" type="submit">Add Project</button>
          </form>
        </div>

        <div>
          <h1 className="projects-heading">Projects</h1>
        </div>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="projects-card" key={index}>
              <img src={project.image} className="project-image" alt="websiteIcon" />
              <h2 className="project-title">{project.name}</h2>
              <p className="project-title1">{project.description}</p>
              <div className="github-link-container">
                <a href={project.github} target="_blank" rel="noreferrer">
                  Github
                </a>
                <a href={project.link} target="_blank" rel="noreferrer">
                  Link
                </a>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}

export default ProjectAdd;

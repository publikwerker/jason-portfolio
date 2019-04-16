import React from 'react';
import {projectList} from '../projectList';

export default class Body extends React.Component {

  render() {
    console.log(projectList);
    let projectDisplay=[];
    projectList.forEach((project, index) => {
      projectDisplay.push(<div key={index} className="project-box">
          <h2 className="project-title">{project.title}</h2>
          <img className="project-image" alt="the app as viewed in widescreen and mobile format" src={project.mockUp}></img>
          <p className="project-description body-copy">{project.description}</p>
          <p className="project-stack">{project.stack}</p>
          <a className="project-github project-link" href={project.github}>Github</a> 
          <a className="project-demo project-link" href={project.demo}>Demo</a>
        </div>) })
    return(<main>
      <div className="main-body">
      <h1>Past Projects:   </h1>
      {projectDisplay}
      </div>
    </main>
    )
  }
}
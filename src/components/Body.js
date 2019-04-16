import React from 'react';
import {projectList} from '../projectList';

export default class Body extends React.Component {
  render() {
    console.log(projectList);
    let projectDisplay=[];
    projectList.forEach((project, index) => {
      projectDisplay.push(<div key={index}>
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <p className="project-stack">{project.stack}</p>
          <a className="project-github" href={project.github}>Github</a> 
          <a className="project-demo" href={project.demo}>Demo</a>
        </div>) })
    return(<div>
    <h1>Past Projects:   </h1>
     {projectDisplay}
    </div>
    )
  }
}
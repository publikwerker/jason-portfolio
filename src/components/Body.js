import React from 'react';
import {projectList} from '../projectList';

export default class Body extends React.Component {

  render() {
    console.log(projectList);
    let projectDisplay=[];
    projectList.forEach((project, index) => {
      projectDisplay.push(<div key={index} className="project-box"> 
          <img className="project-screenshot" alt="a close up of some nice design" src={project.screenshot}></img>
          <h3 className="project-title">{project.title}</h3>
          <img className="project-image" alt="the app as viewed in widescreen and mobile format" src={project.mockUp}></img>
          <p className="project-description body-copy">{project.description}</p>
          <p className="project-stack">{project.stack}</p>
          <a className="project-github project-link" href={project.github}>Github</a> 
          <a className="project-demo project-link" href={project.demo}>Demo</a>
        </div>) })
    return(<main>
      <div className="main-body">
      <h3 className=" body-display">Past Werk <i className="smaller">[sic].</i>:   </h3>
      {projectDisplay}
      </div>
    </main>
    )
  }
}
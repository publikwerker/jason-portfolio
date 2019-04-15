import React from 'react';
import {projectList} from '../projectList';

export default class Body extends React.Component {
  render() {
    console.log(projectList);
    return(<div>
    <p>this is the body</p>
    <p>This is projectList: <br /> 
    {projectList}</p>
    </div>
    )
  }
}
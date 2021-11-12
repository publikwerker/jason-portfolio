import React from "react";
import { projectListVox } from "../ProjectListVox";

export default class Voxelart extends React.Component {
    render() {

        let projectDisplay=[];
        projectListVox.forEach( ( project, index ) => {
            projectDisplay.push(<section key={ index } className="project-box">
                <h3 className="project-title">{ project.title }</h3>
                <video width="375px" controls>
                    <source src={project.gif} />
                </video>
            </section> )
        })
        return (

            <main className="main-body">
                <h1>Werkin' to Build the Metaverse One Voxel at a Time!</h1>
                <p className="body-copy">What is a Voxel, you ask? It's like a 3D pixel. It's a <span className="stressed">vo</span>luminous pi<span className="stressed">xel</span>.</p>

                <div className="row showcase">
                    {projectDisplay}
                </div>

            </main>
        );
    };
};
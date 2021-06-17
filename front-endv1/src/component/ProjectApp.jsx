import React, { Component } from 'react';
import ListProjectsComponent from './ListProjectsComponent';

class ProjectApp extends Component {
    render() {
        return (
            <div><h1>Project Application</h1>
                <ListProjectsComponent/>
            </div>
              
        )
    }
}

export default ProjectApp
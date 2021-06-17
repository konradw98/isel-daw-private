import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListProjectsComponent from './ListProjectsComponent';
import ProjectComponent from './ProjectComponent';


class ProjectApp extends Component {
    render() {
        return (
            <Router>
            <>
                <h1>Project Application</h1>
                <Switch>
                    <Route path="/" exact component={ListProjectsComponent} />
                    <Route path="/projects/" exact component={ListProjectsComponent} />
                    <Route path="/projects/:id" component={ProjectComponent} />
                </Switch>
            </>
            </Router>
        )
    }
}

export default ProjectApp
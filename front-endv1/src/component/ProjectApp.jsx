import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListProjectsComponent from './ListProjectsComponent';
import ProjectComponent from './ProjectComponent';
import ListIssuesComponent from './ListIssuesComponent';
import IssueComponent from './IssueComponent';
import CommentComponent from './CommentComponent';

class ProjectApp extends Component {
    
    render() {
        return (
            <Router>
            <>
                <h1>Project Application</h1>
                <Switch>
                    <Route path="/" exact component={ListProjectsComponent} />
                    <Route path="/projects/" exact component={ListProjectsComponent} />
                    <Route path="/projects/:id" exact component={ProjectComponent} />
                   <Route path="/issues/project/:id" exact component={ListIssuesComponent} />
                   <Route path="/issue/:id" exact component={IssueComponent} />
                   <Route path="/issue/comments/:id" exact component={CommentComponent} />
                </Switch>
            </>
            </Router>
        )
    }
}

export default ProjectApp
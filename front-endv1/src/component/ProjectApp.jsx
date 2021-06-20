import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListProjectsComponent from './ListProjectsComponent';
import ProjectComponent from './ProjectComponent';
import ListIssuesComponent from './ListIssuesComponent';
import IssueComponent from './IssueComponent';
import CommentComponent from './CommentComponent';
import ListCommentComponent from './ListCommentComponent';

class ProjectApp extends Component {
    
    render() {
        return (
            <Router>
            <>
                <h1>Menage <a href="http://localhost:3000/">projects</a> App</h1>
                <Switch>
                    <Route path="/" exact component={ListProjectsComponent} />
                    <Route path="/projects/" exact component={ListProjectsComponent} />
                    <Route path="/projects/:id" exact component={ProjectComponent} />
                   <Route path="/issues/project/:id" exact component={ListIssuesComponent} />
                   <Route path="/issue/:iid/:pid" exact component={IssueComponent} />
                   <Route path="/issues/comments/:id" exact component={ListCommentComponent} />
                   <Route path="/issue/comment/:iid/:cid" exact component={CommentComponent} />

                </Switch>
            </>
            </Router>
        )
    }
}

export default ProjectApp
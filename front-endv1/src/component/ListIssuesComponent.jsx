import React, { Component } from 'react';
import ProjectDataService from '../service/ProjectDataService';
//import ProjectDataService from '../service/ProjectDataService';


class ListIssuesComponent extends Component {

    constructor(props) {
        super(props)

        this.state={
            id: this.props.match.params.id,
            issues: []
        }

        this.refreshIssues = this.refreshIssues.bind(this)
    }

    
    componentDidMount() {
        console.log("JESTEM W COMPONENNT DID MOUNT i id="+this.state.id)
        this.refreshIssues(this.state.id);
    }

    refreshIssues(id) {
        console.log("JESTEM W REFRESH ISSUE")
        ProjectDataService.retrieveIssueForProject(id)
            .then(
                response => {
                    //this.setState({ courses: response.data })
                    console.log(response);
                    this.setState({issues:response.data})
                }
            )
    }

    deleteIssueClicked(id){
        ProjectDataService.deleteIssue(id)
        .then(
            response=>{
                this.setState({message:'Delete of issue '+id+' Succesful'})
                this.refreshIssues()
            }
        )
    }


    render(){
        return (
            <div className="container">
                <h3>All Issues</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Creation Date</th>
                                <th>Closed Date</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.issues.map(
                                    issue =>
                                        <tr key={issue.iid}>
                                            <td>{issue.iid}</td>
                                            <td>{issue.name}</td>
                                            <td>{issue.description}</td>
                                            <td>{issue.creationDate}</td>
                                            <td>{issue.closeDate}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteIssueClicked(issue.iid)}>Delete</button></td>

                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListIssuesComponent
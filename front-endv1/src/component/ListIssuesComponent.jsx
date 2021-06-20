import React, { Component } from 'react';
import ProjectDataService from '../service/ProjectDataService';
//import ProjectDataService from '../service/ProjectDataService';


class ListIssuesComponent extends Component {

    constructor(props) {
        super(props)

        this.state={
            pid: this.props.match.params.id,
            issues: []
        }

        this.refreshIssues = this.refreshIssues.bind(this)
        this.updateIssueClicked = this.updateIssueClicked.bind(this)
        this.addIssueClicked = this.addIssueClicked.bind(this)
        this.closeIssueClicked = this.closeIssueClicked.bind(this)


    
    }

    
    componentDidMount() {
        console.log("JESTEM W COMPONENNT DID MOUNT i id="+this.state.id)
        this.refreshIssues(this.state.pid);
    }

    refreshIssues(pid) {
        console.log("JESTEM W REFRESH ISSUE")
        ProjectDataService.retrieveIssueForProject(pid)
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
                this.refreshIssues(this.state.pid)
            }
        )
    }

    updateIssueClicked(iid) {
        console.log('issue update ' + iid)
        this.props.history.push(`/issue/${iid}/${this.state.pid}`)
    }
    
    closeIssueClicked(id){
        ProjectDataService.closeIssue(id)
        .then(
            response=>{
                this.setState({message:'Close of issue '+id+' Succesful'})
                this.refreshIssues(this.state.pid)
            }
        )
    }
        

    addIssueClicked() {
        this.props.history.push(`/issue/-1/${this.state.pid}`)
    }

    showIssuesCommentsClicked(id){
    
            console.log("ID w issue comments clicked="+id)
            //this.props.history.push(`issues/project/1`) 
            //"issues/comments/{iid}")
            this.props.history.push(`/issues/comments/${id}`) 
        

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
                                <th>State</th>
                                <th>Label</th>
                                <th>Creation Date</th>
                                <th>Closed Date</th>
                                <th>DELETE</th>
                                <th>ARCHIVE</th>
                                <th>UPDATE</th>
                                <th>COMMENTS</th>
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
                                            <td>{issue.state}</td>
                                            <td>{issue.labels}</td>
                                            <td>{issue.creationDate}</td>
                                            <td>{issue.closeDate}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteIssueClicked(issue.iid)}>Delete</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.closeIssueClicked(issue.iid)}>CLOSE!</button></td>
                                            <td><button className="btn btn-success" onClick={() => this.updateIssueClicked(issue.iid)}>Update</button></td>
                                            <td><button className="btn btn-success" onClick={() => this.showIssuesCommentsClicked(issue.iid)}>Show Comments</button></td>


                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
    <button className="btn btn-success" onClick={this.addIssueClicked}>Add</button>
</div>
                </div>
            </div>
        )
    }
}

export default ListIssuesComponent
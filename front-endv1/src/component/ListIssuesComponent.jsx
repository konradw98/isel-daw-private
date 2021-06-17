import React, { Component } from 'react';
import ProjectDataService from '../service/ProjectDataService';
//import ProjectDataService from '../service/ProjectDataService';


class ListIssuesComponent extends Component {

    constructor(props) {
        super(props)

        this.state={
            id: this.props.match.params.id,
            
        }

        this.refreshIssues = this.refreshIssues.bind(this)
    }

    
    componentDidMount() {
        console.log("JESTEM W COMPONENNT DID MOUNT i id="+this.state.id)
        this.refreshIssues(this.state.id);
    }

    refreshIssues(id) {
        console.log("JESTEM W REFRESH ISSUE")
        ProjectDataService.retrieveIssueForPeoject(id)
            .then(
                response => {
                    console.log(response);
                }
            )
    }


    render(){
        return(
        <div className="conainer">
            <h2>ISSUES</h2>
            <p>1aaa</p>
            <p>2aa</p>
            <p>3aa</p>
        </div>)
    }
}

export default ListIssuesComponent
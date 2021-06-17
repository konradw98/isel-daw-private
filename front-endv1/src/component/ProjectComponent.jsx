import React, { Component } from 'react';
import ProjectDataService from '../service/ProjectDataService';

class ProjectComponent extends Component{

    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            name: ''
        }
    }

    componentDidMount(){
        console.log("state id project component"+this.state.id)

        if(this.state.id==-1){
            return
        }

        ProjectDataService.retrieveProject(this.state.id)
        .then(response=> this.setState({
            name: response.data.name
        }))
    }

    render(){

        let {name, id}= this.state 
        return (
            <div>
                <h3>Project Details</h3>
                <div>{id}</div>
                <div>{name}</div>
            </div>
            

        )
    }
}

export default ProjectComponent 
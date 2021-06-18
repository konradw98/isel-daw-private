import React, {Component} from 'react';
import ProjectDataService from '../service/ProjectDataService';

class IssueComponent extends Component{

    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            name: '',
            description: '',
            iid: 0
        }
    }

 /*   componentDidMount(){
        console.log('jestem c omponent did mount w issuecomponent')
        if(this.state.id==-1){
            return
        }
        ProjectDataService.retrieveIssue(this.state.id)
        .then(response=>{
            this.setState({
            name:response.data.name,
            iid: response.data.iid
        })})
    }*/

    render(){

        let {name,id,iid}=this.state

        return (
            <div>
            <h1>Issue INFO</h1>
            <div>{id}</div>
            <div>{name}</div>
            <div>{iid}</div>
            </div>

        )
    }
}

export default IssueComponent
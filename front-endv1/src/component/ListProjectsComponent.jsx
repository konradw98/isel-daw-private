
import React, { Component } from 'react';
import ProjectDataService from '../service/ProjectDataService';

class ListProjectsComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            projects: [],
            message: null
            
        }
        this.refreshProjects=this.refreshProjects.bind(this)
        //this.deleteCourseClicked = this.deleteCourseClicked.bind(this)
        //this.updateProjectClicked = this.updateProjectClicked.bind(this)
        this.addProjectClicked = this.addProjectClicked.bind(this)


    }

    componentDidMount(){
        this.refreshProjects();
        
    }


    refreshProjects(){
        ProjectDataService.retrieveAllProjects()
        .then(response=>{
                console.log(response);
                this.setState({projects:response.data})
        })
    }

    deleteProjectClicked(id){
        ProjectDataService.deleteCourse(id)
        .then(
            response=>{
                this.setState({message:'Delete od course '+id+' Succesful'})
                this.refreshProjects()
            }
        )
    }

    updateProjectClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/projects/${id}`)
    }

    addProjectClicked() { // tu mi w ogole nie przechodzi ale to za chwile
    
        this.props.history.push(`/projects/-1`)
    }

    render() {
        return (
            <div className="container">
                <h3>All Courses</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.projects.map(
                                    project => 
                                    <tr key={project.pid}>
                                        <td>{project.pid}</td>
                                        <td>{project.name}</td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteProjectClicked(project.pid)}>Delete</button></td>
                                        <td><button className="btn btn-success" onClick={() => this.updateProjectClicked(project.pid)}>Update</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
    <button className="btn btn-success" onClick={this.addProjectClicked}>Add</button>
</div>
                </div>
            </div>
        )
    }
}

export default ListProjectsComponent
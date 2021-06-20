import React, {Component} from 'react';
import ProjectDataService from '../service/ProjectDataService';
import { Formik, Form, Field, ErrorMessage } from 'formik';


class IssueComponent extends Component{

    constructor(props){
        super(props)

        this.state={
            iid: this.props.match.params.iid,
            name: null,
            description: null,
            project:this.props.match.params.pid,
            state:null,
            labels:null
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        console.log("JESTEM W DID MOUNT ISSUE COMPONENt")
        if(this.state.iid==-1){
            return
        }

        ProjectDataService.retrieveIssue(this.state.iid)
            .then(response=> this.setState({
                name: response.data.name,
                description: response.data.description,
                iid: response.data.iid,
                project:response.data.project,
                state: response.data.state, 
                labels: response.data.labels
            }))      

    }

    onSubmit(values) {
        console.log("ON SUBMIT THIS STATE PROJECT="+this.state.project)
        let issue={
            iid: this.state.iid,
            name: values.name,
            description: values.description, 
            project: this.state.project,
            state: values.state,
            labels: values.labels
        }
        if(this.state.iid==-1){
            console.log("WYKONANO DODAWANIE ISSUE project="+this.state.project)
            ProjectDataService.createIssue(issue)
            .then(()=>this.props.history.push(`/issues/project/${this.state.project}`))
        
            
            
        } else {
            ProjectDataService.updateIssue(issue)
            .then(()=>this.props.history.push(`/issues/project/${this.state.project}`))
        }
    }
   
    render(){
        console.log("rendername="+this.state.name)
        console.log("renderdescription="+this.state.description)
        console.log("renderiid="+this.state.iid)
        console.log("render PROJECT ID="+this.state.project)

        let {name,iid,description, state,labels, }=this.state

        return (
            <div>
                <h3>Issue</h3>
                <div className="container">
                    <Formik
                        initialValues={{ iid,name,description, state, labels }}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                        validateOnChange={false}
                        validateOnBlur={false}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name='iid' disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>State</label>
                                        <Field className="form-control" type="text" name="state" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Labels</label>
                                        <Field className="form-control" type="text" name="labels" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
    
                </div>
            </div>
        )}
}

export default IssueComponent
import React, {Component} from 'react';
import ProjectDataService from '../service/ProjectDataService';
import { Formik, Form, Field, ErrorMessage } from 'formik';


class IssueComponent extends Component{

    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            name: null,
            description: null,
            iid: null
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        console.log("JESTEM W DID MOUNT ISSUE COMPONENt")
        if(this.state.id==-1){
            return
        }

        ProjectDataService.retrieveIssue(this.state.id)
            .then(response=> this.setState({
                name: response.data.name,
                description: response.data.description,
                iid: response.data.iid
                
            }))      

    }

    onSubmit(values) {
        console.log(values);
    }
   
    render(){
        console.log("rendername="+this.state.name)
        console.log("renderdescription="+this.state.description)
        console.log("renderiid="+this.state.iid)
        
        let {name,id,description}=this.state

        return (
            <div>
                <h3>Issue</h3>
                <div className="container">
                    <Formik
                        initialValues={{ id,name,description }}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name='id' disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
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
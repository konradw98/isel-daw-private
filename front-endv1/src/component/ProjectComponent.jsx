import React, { Component } from 'react';
import ProjectDataService from '../service/ProjectDataService';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class ProjectComponent extends Component{

    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            name: ''
        }
        
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount(){
        console.log("state id project component"+this.state.id)

        if(this.state.id==-1){
            console.log( 'JESTEM W IF')
            return
        }

        ProjectDataService.retrieveProject(this.state.id)
        .then(response=> this.setState({
            name: response.data.name
        }))
    }

    onSubmit(values) {
        console.log("JESEM W ON ONSUBIMT")
        console.log(values);
        let project ={
            pid: this.state.id, 
            name: values.name,
        }

        if(this.state.id===-1){
            ProjectDataService.createProject(project)
            .then(()=>this.props.hitory.push('/projects'))
        } else {
            ProjectDataService.updateProject(this.state.id,project)
            .then(()=>this.props.history.push('/projects'))
        }

        
    }

    validate(values) {
        let errors = {}
        if (!values.name) {
            errors.name = 'Enter a Name'
        } else if (values.name.length < 5) {
            errors.name = 'Enter atleast 5 Characters in Name'
        }
    
        return errors
    }

    render(){

        let {name, id}= this.state 
        return (
            <div>
                <h3>Project</h3>
                <Formik 
                initialValues={{id,name}}
                onSubmit={this.onSubmit}
                validateOnChange={false}
                validateOnBlur={false}
                validate={this.validate}
                enableReinitialize={true}
                >
                    {(props)=>(
                        <Form>
                            <ErrorMessage name="description" component="div"
                             className="alert alert-warning" />
                            <fieldset clasName="form-group">
                            <label>Id</label>
                            <Field clasName="form-control" type="text" name="id" disabled />
                            </fieldset>
                            <fieldset clasName="form-group">
                                <label>Name</label>
                                <Field clasName='form-control' type="text" name="name"/>
                            </fieldset>
                            <button className="btn btn-success" type="submit">Save</button>
                        </Form>
                    )}
                </Formik>
            </div>
            

        )
    }
}

export default ProjectComponent 
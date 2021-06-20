import React, {Component} from 'react';
import ProjectDataService from '../service/ProjectDataService';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class CommentComponent extends Component{

    constructor(props) {
        super(props)

        this.state = {
            iid: this.props.match.params.iid,
            cid: this.props.match.params.cid,
            description: '',
            issue:null
        }

        //this.addIssueClicked = this.addIssueClicked.bind(this)
        this.onSubmit=this.onSubmit.bind(this)

    }

    componentDidMount() {

        console.log("w componen did mount iid="+this.state.iid)
        console.log("w componen did mount cid="+this.state.cid)


        // eslint-disable-next-line
        if (this.state.cid == -1) {
            return
        }

        ProjectDataService.retrieveComment(this.state.cid)
            .then(response => this.setState({
                description: response.data.description,
                issue: response.data.issue
            }))
    }

    onSubmit(values) {
        console.log("onSumbit id="+this.state.id)
        console.log("onSumbit description="+values.description)
        console.log("onSumbit issue="+this.state.issue)


        let comment = {
            cid: this.state.cid,
            description: values.description,
            issue: this.state.iid
        }

        if (this.state.cid == -1) {
            ProjectDataService.createComment(comment)
                .then(() => this.props.history.push(`/issue/comments/${this.state.iid}`))
        } else {
            /*CourseDataService.updateCourse(username, this.state.id, course)
                .then(() => this.props.history.push('/courses'))*/
                console.log("W IFIE ZLE PRZESZLO")
        }

        console.log("comment id="+comment.cid);
        console.log("comment description="+comment.description);
        console.log("comment issue="+comment.issue);

        
    }

    render() {

        let { description, cid, iid } = this.state
        return (
            <div>
                <h3>Comment</h3>
                <div className="container">
                    <Formik
                        initialValues={{ cid, description,iid }}
                        enableReinitialize={true}
                        onSubmit={this.onSubmit}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label> Issue Id</label>
                                        <Field className="form-control" type="text" name="iid" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label> Comment Id</label>
                                        <Field className="form-control" type="text" name="cid" disabled />
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
        )
    }
}

export default CommentComponent
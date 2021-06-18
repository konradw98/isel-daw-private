import React, {Component} from 'react';
import ProjectDataService from '../service/ProjectDataService';

class CommentComponent extends Component{

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: ''
        }

    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        ProjectDataService.retrieveComment(this.state.id)
            .then(response => this.setState({
                description: response.data.description
            }))
    }

    render() {

        let { description, id } = this.state

        return (
            <div>
                <h3>Comment</h3>
                <div>{id}</div>
                <div>desciprion={description}</div>
            </div>
        )
    }
}

export default CommentComponent
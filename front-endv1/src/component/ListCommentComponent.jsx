import React, {Component} from 'react';
import ProjectDataService from '../service/ProjectDataService';

class ListCommentComponent extends Component{

    constructor(props) {
        super(props)

        this.state={
            id: this.props.match.params.id,
            comments: []
        }

      this.refreshComments = this.refreshComments.bind(this)
    this.updateCommentClicked = this.updateCommentClicked.bind(this)
       this.addCommentClicked = this.addCommentClicked.bind(this)


    
    }

    
    componentDidMount() {
        console.log("JESTEM W COMPONENNT DID COMMENTS MOUNT i id="+this.state.id)
        this.refreshComments(this.state.id);
    }

    refreshComments(id) {
        console.log("JESTEM W REFRESH Comments")
        ProjectDataService.retrieveCommentForIssue(id)
            .then(
                response => {
                    //this.setState({ courses: response.data })
                    console.log('JESTEM W RESPONSE');
                    console.log(response);
                    this.setState({comments:response.data})
                }
            )
    }

    deleteCommentClicked(id){
        ProjectDataService.deleteComment(id)
        .then(
            response=>{
                this.setState({message:'Delete of issue '+id+' Succesful'})
                this.refreshComments(this.state.id)
            }
        )
    }

    updateCommentClicked(cid) {
        console.log('comment update ' + cid)
        this.props.history.push(`/issue/comment/${this.state.id}/${cid}`)
    }

    addCommentClicked() {
        this.props.history.push(`/issue/comment/${this.state.id}/-1`)
    }

   

    render(){
        return (
            <div className="container">
            <h3>All Commentss</h3>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>DELETE</th>
                            <th>UPDATE</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.comments.map(
                                comment =>
                                    <tr key={comment.cid}>
                                        <td>{comment.cid}</td>
                                        <td>{comment.description}</td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteCommentClicked(comment.cid)}>Delete</button></td>
                                            <td><button className="btn btn-success" onClick={() => this.updateCommentClicked(comment.cid)}>Update</button></td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="row">
    <button className="btn btn-success" onClick={this.addCommentClicked}>Add</button>
</div>
            </div>
        </div>
        )
    }
}


export default ListCommentComponent
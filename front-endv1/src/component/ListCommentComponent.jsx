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
        //this.updateCommentClicked = this.updateCommentClicked.bind(this)
       // this.addCommentClicked = this.addCommentClicked.bind(this)


    
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

   /* deleteIssueClicked(id){
        ProjectDataService.deleteIssue(id)
        .then(
            response=>{
                this.setState({message:'Delete of issue '+id+' Succesful'})
                this.refreshIssues()
            }
        )
    }

    updateIssueClicked(id) {
        console.log('issue update ' + id)
        this.props.history.push(`/issue/${id}`)
    }

    addIssueClicked() {
        this.props.history.push(`/issue/-1`)
    }

    showIssuesCommentsClicked(id){
    
            console.log("ID w issue comments clicked="+id)
            //this.props.history.push(`issues/project/1`) 
            //"issues/comments/{iid}")
            this.props.history.push(`/issue/comments/${id}`) 
        

    }*/

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
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.comments.map(
                                comment =>
                                    <tr key={comment.cid}>
                                        <td>{comment.cid}</td>
                                        <td>{comment.description}</td>
                                        

                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="row">
</div>
            </div>
        </div>
        )
    }
}


export default ListCommentComponent
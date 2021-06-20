import axios from 'axios'

const PROJECT_API_URL='http://localhost:8080/projects/'


class ProjectDataService{
    updateProject(id, project){
        return axios.put('http://localhost:8080/projects/'+id,project)
    }
    
    createProject(project){
        return axios.post('http://localhost:8080/projects/',project)
    }

    retrieveAllProjects(){
        return axios.get(PROJECT_API_URL);
    }

    deleteCourse(id){
        console.log('ececuted service')
        console.log('id='+id)
        return axios.delete('http://localhost:8080/projects/'+id);
    }

    deleteIssue(id){
        console.log('ececuted service dleteIssue')
        console.log('id='+id)
        return axios.delete('http://localhost:8080/issues/'+id);
    }

    retrieveIssueForProject(id){
        console.log('ececuted service retrieve Issue fprProject')
        console.log('id='+id)
        return axios.get('http://localhost:8080/issues/project/'+id);
    }

    retrieveProject(id){
        console.log('ececuted service retrieve Project')
        console.log('id='+id)
        return axios.get('http://localhost:8080/projects/'+id);
    }

    retrieveIssue(id){
        console.log('ececuted service retrieveIssue')
        console.log('id='+id)
        return axios.get('http://localhost:8080/issues/'+id);
    }

    updateIssue(id, issue){
        console.log("wykonuje updateIssue")
        console.log("ISSUE IID="+issue.iid)
        console.log("ISSUE name="+issue.name)
        console.log("ISSUE desciption="+issue.description)
        console.log("ISSUE project="+issue.project)

        return axios.put('http://localhost:8080/issues/'+id,issue)
    }

    createIssue(issue){
        console.log("wykonuje crateIssue")
        console.log("ISSUE IID="+issue.iid)
        console.log("ISSUE name="+issue.name)
        console.log("ISSUE description="+issue.description)
        console.log("ISSUE project="+issue.project)



        return axios.post('http://localhost:8080/issues/',issue)
    }

    retrieveCommentForIssue(id){
        return axios.get('http://localhost:8080/issues/comments/'+id);
    }

    deleteComment(id){
        console.log('ececuted service dleteIssue')
        console.log('id='+id)
        return axios.delete('http://localhost:8080/comments/'+id);
    }

    retrieveComment(id){
        console.log('ececuted service retrieveComment')
        console.log('id='+id)
        return axios.get('http://localhost:8080/comments/'+id)
    }

   createComment(comment){
        console.log("wykonuje cratecomment")
        console.log("Commen IID="+comment.cid)
        console.log("ISSUE description="+comment.description)
        console.log("ISSUE project="+comment.issue)



        return axios.post('http://localhost:8080/comments/',comment)
    }

    updateComment(comment){
        console.log("wykonuje UPDATEcomment")
        console.log("Commen IID="+comment.cid)
        console.log("ISSUE description="+comment.description)
        console.log("ISSUE project="+comment.issue)

        return axios.put('http://localhost:8080/comments/',comment)
    }



}

export default new ProjectDataService();
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
}

export default new ProjectDataService();
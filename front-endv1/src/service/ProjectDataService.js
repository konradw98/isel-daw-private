import axios from 'axios'

const PROJECT_API_URL='http://localhost:8080/projects/'


class ProjectDataService{
    
    retrieveAllProjects(){
        return axios.get(PROJECT_API_URL);
    }

    deleteCourse(id){
        console.log('ececuted service')
        console.log('id='+id)
        return axios.delete('http://localhost:8080/projects/'+id);
    }

    retrieveProject(id){
        console.log('ececuted service retrieve Project')
        console.log('id='+id)
        return axios.get('http://localhost:8080/projects/'+id);
    }
}

export default new ProjectDataService();
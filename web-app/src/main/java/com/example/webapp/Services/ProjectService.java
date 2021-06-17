package com.example.webapp.Services;

import com.example.webapp.Models.Project;
import com.example.webapp.Repositories.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {
    ProjectRepository projectRepository;

    public Project findProjectById(Long id){
        return  projectRepository.findProjectByPid(id);
    }

    public Project saveProject(Project project){
        return projectRepository.save(project);
    }
    public List<Project> findAll(){
        return projectRepository.findAll();
    }

    public void deleteById(Long id){
        projectRepository.deleteById(id);
    }
    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }
}

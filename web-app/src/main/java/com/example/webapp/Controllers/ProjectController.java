package com.example.webapp.Controllers;

import com.example.webapp.Models.Comment;
import com.example.webapp.Models.Project;
import com.example.webapp.Services.ProjectService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class ProjectController {
    ProjectService projectService;

    @GetMapping("projects/{id}")
    public Project getProjectById(@PathVariable Long id){
        return  projectService.findProjectById(id);
    }

    @PutMapping("projects/{id}")
    public Project updateProjectById(@RequestBody Project project){

        return  projectService.saveProject(project);
    }
    @PostMapping("projects/")
    @ResponseStatus(HttpStatus.CREATED)
    public Project saveComment(@RequestBody Project project){
        return projectService.saveProject(project);
    }

    @GetMapping("projects/")
    public List<Project> getAllProject(){
        return  projectService.findAll();
    }


    @DeleteMapping("/projects/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable Long id) {
        projectService.deleteById(id);

        return ResponseEntity.noContent().build();
    }

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }
}

package com.example.webapp.Controllers;

import com.example.webapp.Models.Comment;
import com.example.webapp.Models.Project;
import com.example.webapp.Services.ProjectService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class ProjectController {
    ProjectService projectService;

    @GetMapping("projects/{id}")
    public Project getCustomerById(@PathVariable Long id){
        return  projectService.findProjectById(id);
    }

    @PostMapping("projects/")
    @ResponseStatus(HttpStatus.CREATED)
    public Project saveComment(@RequestBody Project project){
        return projectService.saveProject(project);
    }

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }
}

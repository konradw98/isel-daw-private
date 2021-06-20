package com.example.webapp.Controllers;

import com.example.webapp.Models.Comment;
import com.example.webapp.Models.Issue;
import com.example.webapp.Models.IssueAdapter;
import com.example.webapp.Models.Project;
import com.example.webapp.Services.IssueService;
import com.example.webapp.Services.ProjectService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@CrossOrigin
@RestController
public class IssueController {

    IssueService issueService;
    ProjectService projectService;

    @GetMapping("issues/{id}")
    public Issue getIssueById(@PathVariable Long id){
        return  issueService.findIssueById(id);
    }

    @CrossOrigin
    @PostMapping("issues/")
    @ResponseStatus(HttpStatus.CREATED)
    public Issue saveIssue(@RequestBody IssueAdapter issueAdapter){
       /* Issue issue1= new Issue();
        issue1.setName(issue.getName());
        issue1.setDescription(issue.getDescription());
        Project project= projectService.findProjectById(issue.getProject().getPid());
        issue1.setProject(project);
        issue1.setCloseDate(Date.valueOf(LocalDate.now()));*/
        Issue issue= new Issue();
        issue.setName(issueAdapter.getName());
        issue.setDescription(issueAdapter.getDescription());
        issue.setState(issueAdapter.getState());
        issue.setLabels(issueAdapter.getLabels());
        Project project= projectService.findProjectById(issueAdapter.getProject());
        issue.setProject(project);
        issue.setCreationDate(Date.valueOf(LocalDate.now()));

        return issueService.saveIssue(issue);
    }

    @DeleteMapping("/issues/{id}")
    public ResponseEntity<Void> deleteIssue(@PathVariable Long id) {
        issueService.deleteById(id); //ZAMIAST USUWANIA PO PROSTU USTAWIC CLOSED DATE I  ZMIENIC NAZWE POBIERANIA WSZYSTKICH TYLKO NA TA BEZ COSED DATE
        return ResponseEntity.noContent().build();
    }
   // @CrossOrigin
    @PutMapping("issues/")
    public Issue updateIssuetById(@RequestBody IssueAdapter issueAdapter){
        Issue issue=issueService.findIssueById(issueAdapter.getIid());
        issue.setName(issueAdapter.getName());
        issue.setDescription(issueAdapter.getDescription());
        issue.setState(issueAdapter.getState());
        issue.setLabels(issueAdapter.getLabels());

        return  issueService.saveIssue(issue);
    }
    @PutMapping("issue/close/{id}")
    public Issue closeIssuetById(@PathVariable long id){
        Issue issue=issueService.findIssueById(id);
        issue.setState("CLOSED");
        issue.setCloseDate(Date.valueOf(LocalDate.now()));


        return  issueService.saveIssue(issue);
    }

    @GetMapping("issues/project/{pid}")
    public List<Issue> getIssuesByProjectId(@PathVariable Long pid){
        return  issueService.findIssuesByProjectId(pid);
    }

    public IssueController(IssueService issueService, ProjectService projectService) {
        this.issueService = issueService;
        this.projectService = projectService;
    }
}

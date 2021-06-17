package com.example.webapp.Controllers;

import com.example.webapp.Models.Comment;
import com.example.webapp.Models.Issue;
import com.example.webapp.Services.IssueService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class IssueController {

    IssueService issueService;

    @GetMapping("issues/{id}")
    public Issue getIssueById(@PathVariable Long id){
        return  issueService.findIssueById(id);
    }

    @PostMapping("issues/")
    @ResponseStatus(HttpStatus.CREATED)
    public Issue saveIssue(@RequestBody Issue issue){
        return issueService.saveIssue(issue);
    }

    @DeleteMapping("/issues/{id}")
    void deleteIssue(@PathVariable Long id) {
        issueService.deleteById(id);
    }

    @GetMapping("issues/project/{pid}")
    public List<Issue> getIssuesByProjectId(@PathVariable Long pid){
        return  issueService.findIssuesByProjectId(pid);
    }

    public IssueController(IssueService issueService) {
        this.issueService = issueService;
    }
}

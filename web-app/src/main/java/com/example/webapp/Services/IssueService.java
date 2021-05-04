package com.example.webapp.Services;

import com.example.webapp.Models.Issue;
import com.example.webapp.Repositories.IssueRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IssueService {
    IssueRepository issueRepository;

    public Issue findIssueById(Long id){
        return issueRepository.findIssueByIid(id);
    }

    public Issue saveIssue(Issue issue){
        return issueRepository.save(issue);
    }

    public void deleteById(Long id){
        issueRepository.deleteById(id);
    }
    public IssueService(IssueRepository issueRepository) {
        this.issueRepository = issueRepository;
    }
}

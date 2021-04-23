package com.example.webapp.Repositories;

import com.example.webapp.Models.Issue;
import org.springframework.data.jpa.repository.JpaRepository;


public interface IssueRepository extends JpaRepository<Issue,Long> {

    public Issue findIssueByIid(Long id);

}

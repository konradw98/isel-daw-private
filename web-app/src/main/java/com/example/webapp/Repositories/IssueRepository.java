package com.example.webapp.Repositories;

import com.example.webapp.Models.Issue;
import com.example.webapp.Models.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface IssueRepository extends JpaRepository<Issue,Long> {

    Issue findIssueByIid(Long id);

    @Query(value="SELECT * FROM issue WHERE issue.project_pid=?1",nativeQuery = true)
    List<Issue> findIssueByProject(Long pid);

}

package com.example.webapp.Repositories;


import com.example.webapp.Models.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project,Long> {
    public Project findProjectByPid(Long id);


}

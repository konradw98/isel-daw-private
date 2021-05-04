package com.example.webapp.Repositories;

import com.example.webapp.Models.Project;
import com.example.webapp.Models.State;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StateRepository extends JpaRepository<State,Long> {
}

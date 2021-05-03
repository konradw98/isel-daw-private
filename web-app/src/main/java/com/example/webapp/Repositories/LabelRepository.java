package com.example.webapp.Repositories;

import com.example.webapp.Models.Label;
import org.springframework.data.jpa.repository.JpaRepository;


public interface LabelRepository extends JpaRepository<Label,Long> {
}

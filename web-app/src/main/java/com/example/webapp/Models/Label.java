package com.example.webapp.Models;
//defect, new-functionality, or exploration

import com.fasterxml.jackson.annotation.JsonIdentityReference;

import javax.persistence.*;
import java.util.List;

@Entity
public class Label {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long lid;
    private String name;

    @ManyToOne
    @JsonIdentityReference(alwaysAsId = true)
    @JoinColumn(name="issue_id")
    private  Issue issue;


    public Label(long lid, String name, Project project)  {
        this.lid = lid;
        this.name = name;

    }

    public Label() {
    }

    public long getLid() {
        return lid;
    }

    public void setLid(long lid) {
        this.lid = lid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }



}

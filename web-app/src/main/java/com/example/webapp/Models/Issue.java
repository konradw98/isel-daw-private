package com.example.webapp.Models;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Issue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long iid;
    private String name;
    private String description;
    private Date creationDate;
    private Date closeDate;
    private String label; // maybe it should be enum???
    private String state; // same as up
    @ManyToOne
    private Project project;

    public Issue() {
    }

    public Issue(long iid, String name, String description, Date creationDate, Date closeDate, String label, String state, Project project) {
        this.iid = iid;
        this.name = name;
        this.description = description;
        this.creationDate = creationDate;
        this.closeDate = closeDate;
        this.label = label;
        this.state = state;
        this.project = project;
    }

    public long getIid() {
        return iid;
    }

    public void setIid(long iid) {
        this.iid = iid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public Date getCloseDate() {
        return closeDate;
    }

    public void setCloseDate(Date closeDate) {
        this.closeDate = closeDate;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }
}

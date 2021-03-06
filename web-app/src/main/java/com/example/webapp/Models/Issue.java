package com.example.webapp.Models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "iid")
public class Issue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long iid;
    private String name;
    private String description;
    private Date creationDate;
    private Date closeDate;
   // @OneToMany(mappedBy = "issue")
    private String state;
    //@JsonIgnoreProperties("lid")
   // @OneToMany(mappedBy = "issue")
    private String labels;


    @JsonIdentityReference(alwaysAsId = true)
    @ManyToOne(cascade =CascadeType.DETACH)
    private Project project;

    @OneToMany(mappedBy = "issue",cascade =CascadeType.REMOVE)
    private List<Comment> comments;

    public Issue() {
    }

    public Issue(long iid, String name, String description, Date creationDate, Date closeDate, String state, String labels, Project project, List<Comment> comments) {
        this.iid = iid;
        this.name = name;
        this.description = description;
        this.creationDate = creationDate;
        this.closeDate = closeDate;
        this.state = state;
        this.labels = labels;
        this.project = project;
        this.comments = comments;
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

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getLabels() {
        return labels;
    }

    public void setLabels(String labels) {
        this.labels = labels;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }
}

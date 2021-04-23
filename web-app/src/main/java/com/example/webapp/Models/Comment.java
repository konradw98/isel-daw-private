package com.example.webapp.Models;

import javax.persistence.*;

@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long cid;
    private String description;

    @ManyToOne
    private Issue issue;

    public Comment() {
    }

    public Comment(long cid, String description, Issue issue) {
        this.cid = cid;
        this.description = description;
        this.issue = issue;
    }

    public long getCid() {
        return cid;
    }

    public void setCid(long cid) {
        this.cid = cid;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Issue getIssue() {
        return issue;
    }

    public void setIssue(Issue issue) {
        this.issue = issue;
    }


}

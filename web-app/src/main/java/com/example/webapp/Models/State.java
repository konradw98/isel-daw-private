package com.example.webapp.Models;

import com.fasterxml.jackson.annotation.JsonIdentityReference;

import javax.persistence.*;

@Entity
public class State {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long sid;
    private String name;

    @ManyToOne
    @JsonIdentityReference(alwaysAsId = true)
    @JoinColumn(name = "issue_id")
    private Issue issue;

    public State(long sid, String name, Issue issue) {
        this.sid = sid;
        this.name = name;
        this.issue = issue;
    }

    public State() {
    }

    public long getSid() {
        return sid;
    }

    public void setSid(long sid) {
        this.sid = sid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Issue getIssue() {
        return issue;
    }

    public void setIssue(Issue issue) {
        this.issue = issue;
    }
}
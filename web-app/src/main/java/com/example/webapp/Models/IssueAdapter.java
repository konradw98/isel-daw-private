package com.example.webapp.Models;

public class IssueAdapter {
    private long iid;
    private String name;
    private String description;
    private long project;
    private String state;
    private String labels;

    public IssueAdapter(long iid, String name, String description, long project, String state, String labels) {
        this.iid = iid;
        this.name = name;
        this.description = description;
        this.project = project;
        this.state = state;
        this.labels = labels;
    }

    public IssueAdapter() {
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

    public long getProject() {
        return project;
    }

    public void setProject(long project) {
        this.project = project;
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
}

package com.example.webapp.Models;

public class CommentAdapter {
    /* "cid": 1,
    "description": "description1",
    "issue": 1 */
     private long cid;
     private String description;
     private long issue;

    public CommentAdapter(long cid, String description, long issue) {
        this.cid = cid;
        this.description = description;
        this.issue = issue;
    }

    public CommentAdapter() {
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

    public long getIssue() {
        return issue;
    }

    public void setIssue(long issue) {
        this.issue = issue;
    }

    @Override
    public String toString() {
        return "CommentAdapter{" +
                "cid=" + cid +
                ", description='" + description + '\'' +
                ", issue=" + issue +
                '}';
    }
}

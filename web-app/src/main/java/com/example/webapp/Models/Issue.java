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


}

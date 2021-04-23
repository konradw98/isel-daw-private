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


}

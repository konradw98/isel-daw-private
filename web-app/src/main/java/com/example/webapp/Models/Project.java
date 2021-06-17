package com.example.webapp.Models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "pid")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //bylo uusuniete bo cos sie odpierdallao, wiec moze teraz tez tak trzeba
    private long pid;
    @Column(unique=true)
    private String name;

    public Project() {
    }

    public Project(long pid, String name) {
        this.pid = pid;
        this.name = name;
    }

    public long getPid() {
        return pid;
    }

    public void setPid(long pid) {
        this.pid = pid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

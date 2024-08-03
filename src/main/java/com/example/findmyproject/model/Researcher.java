package com.example.findmyproject.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "researcher")
public class Researcher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int researcherId;

    @Column(name = "name")
    private String researcherName;

    @Column(name = "specialization")
    private String specialization;

    @ManyToMany
    @JoinTable(name = "researcher_project", joinColumns = @JoinColumn(name = "researcherid"), inverseJoinColumns = @JoinColumn(name = "projectid"))
    @JsonIgnoreProperties("researchers")
    private List<Project> projects = new ArrayList<>();

    public Researcher(int researcherId, String researcherName, String specialization) {
        this.researcherId = researcherId;
        this.researcherName = researcherName;
        this.specialization = specialization;
    }

    public Researcher() {
    }

    public int getResearcherId() {
        return researcherId;
    }

    public void setResearcherId(int researcherId) {
        this.researcherId = researcherId;
    }

    public String getResearcherName() {
        return researcherName;
    }

    public void setResearcherName(String researcherName) {
        this.researcherName = researcherName;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public void setProjects(List<Project> projects) {
        this.projects = projects;
    }

}

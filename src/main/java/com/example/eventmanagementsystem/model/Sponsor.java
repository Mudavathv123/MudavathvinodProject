/*
 * You can use the following import statements
 *
 * import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
 * 
 * import javax.persistence.*;
 * import java.util.List;
 * 
 */

// Write your code here

package com.example.eventmanagementsystem.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.ManyToMany;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "sponsor")
public class Sponsor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int sponsorId;

    @Column(name = "name")
    private String sponsorName;

    @Column(name = "industry")
    private String industry;

    @ManyToMany
    @JoinTable(name = "event_sponsor", joinColumns = @JoinColumn(name = "sponsorid"), inverseJoinColumns = @JoinColumn(name = "eventid"))
    @JsonIgnoreProperties("sponsors")
    private List<Event> events = new ArrayList<Event>();

    public Sponsor(int sponsorId, String sponsorName, String industry, List<Event> events) {
        this.sponsorId = sponsorId;
        this.sponsorName = sponsorName;
        this.industry = industry;
        this.events = events;
    }

    public Sponsor() {
    }

    public int getSponsorId() {
        return sponsorId;
    }

    public void setSponsorId(int sponsorId) {
        this.sponsorId = sponsorId;
    }

    public String getSponsorName() {
        return sponsorName;
    }

    public void setSponsorName(String sponsorName) {
        this.sponsorName = sponsorName;
    }

    public String getIndustry() {
        return industry;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
    }

    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }

}
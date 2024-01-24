/*
 * You can use the following import statements
 * 
 * import javax.persistence.*;
 * 
 */

// Write your code here

package com.example.movie.model;

import javax.persistence.Id;
import javax.persistence.GenerationType;
import javax.persistence.GeneratedValue;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "movielist")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "movieid")
    private int movieId;

    @Column(name = "moviename")
    private String movieName;

    @Column(name = "leadactor")
    private String leadActor;

    public Movie(int movieId, String movieName, String leadActor) {
        this.movieId = movieId;
        this.movieName = movieName;
        this.leadActor = leadActor;
    }

    public Movie() {
    }

    public void setMovieId(int movieId) {
        this.movieId = movieId;
    }

    public int getMovieId() {
        return this.movieId;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

    public String getMovieName() {
        return this.movieName;
    }

    public void setLeadActor(String leadActor) {
        this.leadActor = leadActor;
    }

    public String getLeadActor() {
        return this.leadActor;
    }

}
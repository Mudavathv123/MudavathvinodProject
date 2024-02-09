/*
 *
 * You can use the following import statements
 * 
 * import javax.persistence.*;
 * 
 */

// Write your code here


package com.example.nxttrendz1.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table(name = "review")
public class Review {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name = "reviewid")
    private int reviewId;

    @Column(name = "reviewcontent")
    private String reviewContent;

    @Column(name = "rating")
    private int rating;

    public Review(int reviewId, String reviewContent, int rating) {

        this.reviewId = reviewId;
        this.reviewContent = reviewContent;
        this.rating = rating;
    }

    public void setReviewId(int reviewId){
        this.reviewId = reviewId;
    }
    public int getReviewId(){
        return this.reviewId;
    }
    
    public void setReviewContent(String reviewContent){
        this.reviewContent = reviewContent;
    }
    public String getReviewContent(){
        return this.reviewContent;
    }
    public void setRating(int rating){
        this.rating = rating;
    }
    public int getRating(){
        return this.rating;
    }

}
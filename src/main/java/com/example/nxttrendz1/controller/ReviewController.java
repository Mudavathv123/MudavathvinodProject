/*
 *
 * You can use the following import statements
 * 
 * import org.springframework.beans.factory.annotation.Autowired;
 * import org.springframework.web.bind.annotation.*;
 * import java.util.ArrayList;
 * 
 */

// Write your code here

package com.example.nxttrendz1.controller;

import com.example.nxttrendz1.service.ReviewJpaService;
import com.example.nxttrendz1.model.Review;
import com.example.nxttrendz1.model.Product;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;

@RestController
public class ReviewController {

    @Autowired
    private ReviewJpaService reviewJpaService;

    @GetMapping("reviews")
    public ArrayList<Review> getReviews() {
        return reviewJpaService.getReviews();
    }

    @GetMapping("reviews/{reviewId")
    public Review getReviewById(@PathVariable("reviewId") int reviewId) {
        return reviewJpaService.getReviewById(reviewId);
    }

    @GetMapping("reviews/{reviewId}/product")
    public Product getReviewProduct(@PathVariable("reviewId") int reviewId) {
        return reviewJpaService.getReviewProduct(reviewId);
    }

    @PostMapping("reviews")
    public Review addReview(@RequestBody Review review) {
        return reviewJpaService.addReview(review);
    }

    @PutMapping("reviews/{reviewId}")
    public Review updateReview(@RequestBody Review review, @PathVariable("reviewId") int reviewId) {
        return reviewJpaService.updateReview(review, reviewId);
    }

    @DeleteMapping("reviews/{reviewId}")
    public void deleteReview(@PathVariable("reviewId") int reviewId) {
        reviewJpaService.deleteReview(reviewId);
    }
}
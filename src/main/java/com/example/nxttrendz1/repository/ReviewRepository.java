/*
 *
 * You can use the following import statements
 * 
 * import java.util.ArrayList;
 * 
 */

// Write your code here

package com.example.nxttrendz1.repository;

import com.example.nxttrendz1.model.Review;
import java.util.ArrayList;

public interface ReviewRepository {

    ArrayList<Review> getReviews();

    Review getReviewById(int reviewId);

    Review addReview(Review review);

    Review updateReview(Review review, int reviewId);
    
    void deleteReview(int reviewId);
}
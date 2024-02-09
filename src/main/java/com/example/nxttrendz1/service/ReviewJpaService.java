/*
 *
 * You can use the following import statements
 * 
 * import org.springframework.beans.factory.annotation.Autowired;
 * import org.springframework.http.HttpStatus;
 * import org.springframework.stereotype.Service;
 * import org.springframework.web.server.ResponseStatusException;
 * import java.util.ArrayList;
 * import java.util.List;
 * 
 */

// Write your code here

package com.example.nxttrendz1.service;

import com.example.nxttrendz1.model.Review;
import com.example.nxttrendz1.repository.ReviewJpaRepository;
import com.example.nxttrendz1.repository.ReviewRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import java.util.ArrayList;
import java.util.List;

@Service
public class ReviewJpaService implements ReviewRepository {

    @Autowired
    private ReviewJpaRepository reviewJpaRepository;

    @Override
    public ArrayList<Review> getReviews() {
        List<Review> reviews = reviewJpaRepository.findAll();
        return new ArrayList<Review>(reviews);
    }

    @Override
    public Review getReviewById(int reviewId){
        
        try{
            Review review = reviewJpaRepository.findById(reviewId).get();
            return review;
        }catch(Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override 
    public Review addReview(Review review){

        reviewJpaRepository.save(review);
        return review;
    }

    @Override
    public Review updateReview(Review review, int reviewId){
        
        try {
            Review oldReview = reviewJpaRepository.findById(reviewId).get();
            if(review.getReviewContent() != null)
                oldReview.setReviewContent(review.getReviewContent());
            if(review.getRating() != 0)
                oldReview.setRating(review.getRating());
            
            reviewJpaRepository.save(oldReview);
            return oldReview;
        }catch(Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

	@Override
	public void deleteReview(int reviewId) {
		
        try {
            reviewJpaRepository.deleteById(reviewId);
        }catch(Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
		
	}

}
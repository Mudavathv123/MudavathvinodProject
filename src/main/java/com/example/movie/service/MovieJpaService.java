/*
 * You can use the following import statements
 * 
 * import org.springframework.beans.factory.annotation.Autowired;
 * import org.springframework.http.HttpStatus;
 * import org.springframework.stereotype.Service;
 * import org.springframework.web.server.ResponseStatusException;
 * import java.util.*;
 *
 */

// Write your code here

package com.example.movie.service;

import com.example.movie.model.Movie;
import com.example.movie.repository.MovieRepository;
import com.example.movie.repository.MovieJpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import java.util.ArrayList;
import java.util.List;

@Service
public class MovieJpaService implements MovieRepository {

    @Autowired
    private MovieJpaRepository movieJpaRepository;

    @Override
    public ArrayList<Movie> getMovies() {
        List<Movie> listOfMovies = movieJpaRepository.findAll();
        return new ArrayList<Movie>(listOfMovies);
    }

    @Override
    public Movie getMovieById(int movieId) {

        try {
            Movie movie = movieJpaRepository.findById(movieId).get();
            return movie;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Movie addMovie(Movie movie) {

        movieJpaRepository.save(movie);
        return movie;
    }

    @Override
    public Movie updateMovie(int movieId, Movie movie) {

        try {
            Movie oldMovie = movieJpaRepository.findById(movieId).get();
            if (movie.getMovieName() != null)
                oldMovie.setMovieName(movie.getMovieName());
            if (movie.getLeadActor() != null)
                oldMovie.setLeadActor(movie.getLeadActor());
            movieJpaRepository.save(oldMovie);
            return oldMovie;

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public void deleteMovie(int movieId) {

        try {
            movieJpaRepository.deleteById(movieId);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

}
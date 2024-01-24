/*
 * You can use the following import statements
 *
 * import org.springframework.beans.factory.annotation.Autowired;
 * import org.springframework.web.bind.annotation.*;
 * import java.util.*;
 * 
 */

// Write your code here

package com.example.movie.controller;

import com.example.movie.service.MovieJpaService;
import com.example.movie.model.Movie;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.ArrayList;

@RestController
public class MovieController {

    @Autowired
    private MovieJpaService movieJpaService;

    @GetMapping("/movies")
    public ArrayList<Movie> getMovies() {
        return movieJpaService.getMovies();
    }

    @GetMapping("/movies/{movieId}")
    public Movie getMovieById(@PathVariable("movieId") int movieId) {
        return movieJpaService.getMovieById(movieId);
    }

    @PostMapping("/movies")
    public Movie addMovie(@RequestBody Movie movie) {
        return movieJpaService.addMovie(movie);
    }

    @PutMapping("/movies/{movieId}")
    public Movie updateMovie(@PathVariable("movieId") int movieId, @RequestBody Movie movie) {
        return movieJpaService.updateMovie(movieId, movie);
    }

    @DeleteMapping("/movies/{movieId}")
    public void deleteMovie(@PathVariable("movieId") int movieId) {
        movieJpaService.deleteMovie(movieId);
    }
}
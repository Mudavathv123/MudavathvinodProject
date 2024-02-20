/*
 *
 * You can use the following import statements
 * 
 * import org.springframework.beans.factory.annotation.Autowired;
 * import org.springframework.http.HttpStatus;
 * import org.springframework.stereotype.Service;
 * import org.springframework.web.server.ResponseStatusException;
 * 
 * import java.util.ArrayList;
 * import java.util.List;
 * 
 */

// Write your code here

package com.example.dinemaster.service;

import com.example.dinemaster.model.Restaurant;
import com.example.dinemaster.repository.RestaurantJpaRepository;
import com.example.dinemaster.repository.RestaurantRepository;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

@Service
public class RestaurantJpaService implements RestaurantRepository {

    @Autowired
    private RestaurantJpaRepository restaurantJpaRepository;

    @Override
    public ArrayList<Restaurant> getRestaurants() {

        List<Restaurant> restaurants = restaurantJpaRepository.findAll();
        return new ArrayList<Restaurant>(restaurants);
    }

    @Override
    public Restaurant getRestaurantById(int id) {

        try {
            Restaurant restaurant = restaurantJpaRepository.findById(id).get();
            return restaurant;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Restaurant addRestaurant(Restaurant restaurant) {

        restaurantJpaRepository.save(restaurant);
        return restaurant;
    }

    @Override
    public Restaurant updateRestaurant(int id, Restaurant restaurant) {

        try {

            Restaurant oldRestaurant = restaurantJpaRepository.findById(id).get();

            if (restaurant.getName() != null)
                oldRestaurant.setName(restaurant.getName());
            if (restaurant.getAddress() != null)
                oldRestaurant.setAddress(restaurant.getAddress());
            if (restaurant.getCuisineType() != null)
                oldRestaurant.setCuisineType(restaurant.getCuisineType());
            if (restaurant.getRating() != 0)
                oldRestaurant.setRating(restaurant.getRating());

            restaurantJpaRepository.save(oldRestaurant);
            return oldRestaurant;

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public void deleteRestaurant(int id) {

        try {
            restaurantJpaRepository.deleteById(id);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        throw new ResponseStatusException(HttpStatus.NO_CONTENT);
    }

}
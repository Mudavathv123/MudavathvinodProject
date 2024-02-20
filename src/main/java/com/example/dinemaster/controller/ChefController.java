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

package com.example.dinemaster.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.dinemaster.model.Chef;
import com.example.dinemaster.model.Restaurant;
import com.example.dinemaster.service.ChefJpaService;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class ChefController {

    @Autowired
    private ChefJpaService chefJpaService;

    @GetMapping("/chefs")
    public ArrayList<Chef> getChefs() {
        return chefJpaService.getChefs();
    }

    @GetMapping("/chefs/{chefId}")
    public Chef getChefById(@PathVariable("chefId") int chefId) {
        return chefJpaService.getChefById(chefId);
    }

    @GetMapping("/chefs/{chefId}/restaurant")
    public Restaurant getChefRestaurant(@PathVariable("chefId") int chefId) {
        return chefJpaService.getChefRestaurant(chefId);
    }

    @PostMapping("/chefs")
    public Chef addChef(@RequestBody Chef chef) {
        return chefJpaService.addChef(chef);
    }

    @PutMapping("/chefs/{chefId}")
    public Chef updateChef(@PathVariable("chefId") int chefId, @RequestBody Chef chef) {
        return chefJpaService.updateChef(chefId, chef);
    }

    @DeleteMapping("/chefs/{chefId}")
    public void deleteChef(@PathVariable("chefId") int chefId) {
        chefJpaService.deleteChef(chefId);
    }
}
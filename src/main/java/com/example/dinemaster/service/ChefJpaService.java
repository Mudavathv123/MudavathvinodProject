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

package com.example.dinemaster.service;

import java.util.ArrayList;
import java.util.List;
import com.example.dinemaster.model.Chef;
import com.example.dinemaster.model.Restaurant;
import com.example.dinemaster.repository.ChefJpaRepository;
import com.example.dinemaster.repository.ChefRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

@Service
public class ChefJpaService implements ChefRepository {

    @Autowired
    private ChefJpaRepository chefJpaRepository;

    @Override
    public ArrayList<Chef> getChefs() {
        List<Chef> chefs = chefJpaRepository.findAll();
        return new ArrayList<Chef>(chefs);
    }

    @Override
    public Chef getChefById(int id) {

        try {
            Chef chef = chefJpaRepository.findById(id).get();
            return chef;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Chef addChef(Chef chef) {

        chefJpaRepository.save(chef);
        return chef;
    }

    @Override
    public Chef updateChef(int id, Chef chef) {

        try {

            Chef oldChef = chefJpaRepository.findById(id).get();

            if (chef.getFirstName() != null)
                oldChef.setFirstName(chef.getFirstName());
            if (chef.getLastName() != null)
                oldChef.setLastName(chef.getLastName());
            if (chef.getExpertise() != null)
                oldChef.setExpertise(chef.getExpertise());
            if (chef.getExperienceYears() != 0)
                oldChef.setExperienceYears(chef.getExperienceYears());
            
            chefJpaRepository.save(oldChef);
            return oldChef;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public void deleteChef(int id) {

        try {
            chefJpaRepository.deleteById(id);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        throw new ResponseStatusException(HttpStatus.NO_CONTENT);
    }

    @Override
    public Restaurant getChefRestaurant(int chefId){

        try {
            Chef chef = chefJpaRepository.findById(chefId).get();
            return chef.getRestaurant();
        }catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

}
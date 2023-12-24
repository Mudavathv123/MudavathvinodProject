/*
 * 
 * You can use the following import statements
 * import org.springframework.web.bind.annotation.*;
 * import java.util.*;
 * 
 */

// Write your code here

package com.example.recipe;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.ArrayList;

@RestController
public class RecipeController {

    RecipeService recipeService = new RecipeService();

    @GetMapping("/recipes")
    public ArrayList<Recipe> getRecipes() {
        return recipeService.getRecipes();
    }

    @PostMapping("/recipes")
    public Recipe addNewRecipe(@RequestBody Recipe recipe) {
        return recipeService.addNewRecipe(recipe);
    }

    @GetMapping("/recipes/{recipeId}")
    public Recipe getRecipeById(@PathVariable("recipeId") int recipeId) {
        return recipeService.getRecipeById(recipeId);
    }

    @PutMapping("/recipes{recipeId}")
    public Recipe updateRecipe(@PathVariable("recipeId") int recipeId, @RequestBody Recipe recipe) {
        return recipeService.updateRecipe(recipeId, recipe);
    }

}
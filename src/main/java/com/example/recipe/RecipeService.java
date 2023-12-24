package com.example.recipe;

import com.example.recipe.RecipeRepository;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import com.example.recipe.Recipe;

import java.util.*;

// Don't modify the below code

public class RecipeService implements RecipeRepository {

        private static HashMap<Integer, Recipe> recipeBook = new HashMap<>();

        int recipeUniqueId = 6;

        public RecipeService() {
                recipeBook.put(1,
                                new Recipe(1, "Pasta", "veg",
                                                Arrays.asList("pasta", "tomatoes", "olive oil", "garlic", "basil")));
                recipeBook.put(2, new Recipe(2, "Chicken Curry", "non-veg",
                                Arrays.asList("chicken", "onion", "tomato", "ginger", "garlic", "spices")));
                recipeBook.put(3, new Recipe(3, "Sushi", "non-veg",
                                Arrays.asList("sushi rice", "tuna fish", "seaweed", "wasabi", "ginger")));
                recipeBook.put(4, new Recipe(4, "Mushroom Risotto", "veg",
                                Arrays.asList("rice", "mushrooms", "onion", "garlic", "butter", "parmesan")));
                recipeBook.put(5, new Recipe(5, "Fish and Chips", "non-veg",
                                Arrays.asList("fish", "potatoes", "flour", "oil", "spices")));
        }

        // Don't modify the above code

        // Write your code here

        @Override
        public ArrayList<Recipe> getRecipes() {
                Collection<Recipe> recipes = recipeBook.values();
                return new ArrayList<Recipe>(recipes);
        }

        @Override
        public Recipe addNewRecipe(Recipe recipe) {
                recipe.setRecipeId(recipeUniqueId);
                recipeBook.put(recipeUniqueId, recipe);
                recipeUniqueId += 1;

                return recipe;
        }

        @Override
        public Recipe getRecipeById(int recipeId) {

                Recipe recipe = recipeBook.get(recipeId);
                if (recipe == null)
                        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
                if (recipe != null)
                        return recipe;
                return null;
        }

        @Override
        public Recipe updateRecipe(int recipeId, Recipe recipe) {
                Recipe exRecipe = recipeBook.get(recipeId);
                if (exRecipe == null)
                        throw new ResponseStatusException(HttpStatus.NOT_FOUND);

                if (recipe.getRecipeName() != null)
                        exRecipe.setRecipeName(recipe.getRecipeName());
                if (recipe.getRecipeType() != null)
                        exRecipe.setRecipeType(recipe.getRecipeType());
                if (recipe.getIngredients() != null)
                        exRecipe.setIngredients(recipe.getIngredients());

                return exRecipe;
        }

}
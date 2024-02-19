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

package com.example.nxttrendz2.service;

import java.util.ArrayList;
import java.util.List;

import com.example.nxttrendz2.model.Category;
import com.example.nxttrendz2.repository.CategoryJpaRepository;
import com.example.nxttrendz2.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class CategoryJpaService implements CategoryRepository {

    @Autowired
    private CategoryJpaRepository categoryJpaRepository;

    @Override
    public ArrayList<Category> getCategories() {

        List<Category> categories = categoryJpaRepository.findAll();
        return new ArrayList<Category>(categories);

    }

    @Override
    public Category getCategoryById(int categoryId) {

        try {
            Category category = categoryJpaRepository.findById(categoryId).get();
            return category;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Category addCategory(Category category) {

        categoryJpaRepository.save(category);
        return category;
    }

    @Override
    public Category updateCategory(int categoryId, Category category) {

        try {
            Category oldCategory = categoryJpaRepository.findById(categoryId).get();

            if (category.getName() != null)
                oldCategory.setName(category.getName());
            if (category.getDescription() != null)
                oldCategory.setDescription(category.getDescription());

            categoryJpaRepository.save(oldCategory);
            return oldCategory;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public void deleteCategory(int categoryId) {

        try {
            categoryJpaRepository.deleteById(categoryId);

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

}
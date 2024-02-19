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

package com.example.nxttrendz2.controller;

import com.example.nxttrendz2.model.Category;
import com.example.nxttrendz2.model.Product;
import com.example.nxttrendz2.service.ProductJpaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;

@RestController
public class ProductController {

    @Autowired
    private ProductJpaService productJpaService;

    @GetMapping("/categories/products")
    public ArrayList<Product> getProducts() {
        return productJpaService.getProducts();
    }

    @GetMapping("/categories/products/{productId}")
    public Product getProductById(@PathVariable("productId") int productId) {
        return productJpaService.getProductById(productId);
    }

    @GetMapping("/products/{productId}/category")
    public Category getProductCategory(@PathVariable("productId") int productId) {
        return productJpaService.getProductCategory(productId);
    }

    @PostMapping("/categories/products")
    public Product addProduct(@RequestBody Product product) {
        return productJpaService.addProduct(product);
    }

    @PutMapping("/categories/products/{productId}")
    public Product updateProduct(@RequestBody Product product, @PathVariable("productId") int productId) {
        return productJpaService.updateProduct(product, productId);
    }

    @DeleteMapping("/categories/products/{productId}")
    public void deleteProduct(@PathVariable("productId") int productId) {

        productJpaService.deleteProduct(productId);
    }
}
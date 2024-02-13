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

import com.example.nxttrendz1.repository.ProductRepository;
import com.example.nxttrendz1.model.Product;
import com.example.nxttrendz1.repository.ProductJpaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductJpaService implements ProductRepository {

    @Autowired
    private ProductJpaRepository productJpaRepository;

    @Override
    public ArrayList<Product> getProducts() {
        List<Product> products = productJpaRepository.findAll();
        return new ArrayList<Product>(products);
    }

    @Override
    public Product getProductById(int productId) {

        try {
            Product product = productJpaRepository.findById(productId).get();
            return product;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Product addProduct(Product product) {

        productJpaRepository.save(product);
        return product;
    }

    @Override
    public Product updateProduct(Product product, int productId) {

        try {
            Product oldProduct = productJpaRepository.findById(productId).get();
            if (product.getProductName() != null)
                oldProduct.setProductName(product.getProductName());
            if (product.getPrice() != 0)
                oldProduct.setPrice(product.getPrice());

            productJpaRepository.save(oldProduct);
            return oldProduct;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public void deleteProduct(int productId) {

        try {
            productJpaRepository.deleteById(productId);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
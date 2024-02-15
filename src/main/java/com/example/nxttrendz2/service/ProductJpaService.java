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

import com.example.nxttrendz2.model.Product;
import com.example.nxttrendz2.repository.ProductJpaRepository;
import com.example.nxttrendz2.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductJpaService implements ProductRepository {

	@Autowired
	private ProductJpaRepository productJpaRepository;

	@Override
	public ArrayList<Product> getProducts() {

		List<Product> allProducts = productJpaRepository.findAll();
		return new ArrayList<Product>(allProducts);
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
			if (product.getDescription() != null)
				oldProduct.setDescription(product.getDescription());
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

		productJpaRepository.deleteById(productId);
	}

}
package com.delivery.projetodelivery.repositories;

import java.util.List;

import com.delivery.projetodelivery.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

	List<Product> findAllByOrderByNameAsc();
}

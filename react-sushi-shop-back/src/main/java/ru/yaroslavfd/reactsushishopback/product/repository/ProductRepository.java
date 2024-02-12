package ru.yaroslavfd.reactsushishopback.product.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.yaroslavfd.reactsushishopback.product.entity.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> { }

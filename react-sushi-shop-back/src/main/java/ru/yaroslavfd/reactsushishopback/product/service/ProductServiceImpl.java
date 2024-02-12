package ru.yaroslavfd.reactsushishopback.product.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ru.yaroslavfd.reactsushishopback.product.entity.Product;
import ru.yaroslavfd.reactsushishopback.product.mapper.ProductMapper;
import ru.yaroslavfd.reactsushishopback.product.model.WebProduct;
import ru.yaroslavfd.reactsushishopback.product.repository.ProductRepository;

import java.util.Collections;
import java.util.List;

@AllArgsConstructor
@Service
@Slf4j
public class ProductServiceImpl implements ProductService {

    ProductRepository productRepository;

    ProductMapper productMapper;

    @Override
    public List<WebProduct> getProducts() {
        try {
            return productMapper.map((List<Product>) productRepository.findAll());
        } catch (Exception e) {
            log.error("getProducts: error when get all products: ", e);
        }
        return Collections.emptyList();
    }
}

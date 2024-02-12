package ru.yaroslavfd.reactsushishopback.configuration.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ru.yaroslavfd.reactsushishopback.product.entity.Product;
import ru.yaroslavfd.reactsushishopback.product.repository.ProductRepository;

import java.io.File;
import java.util.Collections;
import java.util.List;
import java.util.UUID;

@Service
@Slf4j
public class ProductDataConfigurationServiceImpl implements ProductDataConfigurationService {
    private static final String PRODUCTS_JSON_PATH = "react-sushi-shop-back/src/main/resources/db/products.json";

    ObjectMapper objectMapper;

    ProductRepository productRepository;

    ProductDataConfigurationServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
        this.objectMapper = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
    }

    @Override
    public List<Product> GetProductsFromJson() {
        try {
            File productsJsonFile = new File(PRODUCTS_JSON_PATH);
            return objectMapper.readValue(productsJsonFile, new TypeReference<>() {
            });
        } catch (Exception e) {
            log.error("GetProductsFromJson: error when try to get products from json: ", e);
        }
        return Collections.emptyList();
    }

    @Override
    public void SaveProducts(List<Product> productList) {
        try {
            productList.forEach(p -> p.setProductUuid(UUID.randomUUID()));
            productRepository.saveAll(productList);
        } catch (Exception e) {
            log.error("SaveProducts: error when try to save products to db: ", e);
        }
    }

    @Override
    public void DeleteAllProducts() {
        try {
            productRepository.deleteAll();
        } catch (Exception e) {
            log.error("DeleteAllProducts: error when try to delete all products from db: ", e);
        }
    }
}

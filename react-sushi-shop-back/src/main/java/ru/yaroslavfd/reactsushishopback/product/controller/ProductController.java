package ru.yaroslavfd.reactsushishopback.product.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.yaroslavfd.reactsushishopback.product.model.WebProduct;
import ru.yaroslavfd.reactsushishopback.product.service.ProductService;

import java.util.List;

@RestController
@AllArgsConstructor
public class ProductController {
    private static final String GET_PRODUCTS = "/products";

    ProductService productService;

    @GetMapping(GET_PRODUCTS)
    List<WebProduct> getProducts() {
        return productService.getProducts();
    }
}

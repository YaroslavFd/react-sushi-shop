package ru.yaroslavfd.reactsushishopback.product.service;

import ru.yaroslavfd.reactsushishopback.product.model.WebProduct;

import java.util.List;

public interface ProductService {
    /**
     * Получить список всех продуктов
     * @return список продуктов
     */
    List<WebProduct> getProducts();
}

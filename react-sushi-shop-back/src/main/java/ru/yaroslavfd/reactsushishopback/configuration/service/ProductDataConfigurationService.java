package ru.yaroslavfd.reactsushishopback.configuration.service;

import ru.yaroslavfd.reactsushishopback.product.entity.Product;

import java.util.List;

public interface ProductDataConfigurationService {

    /**
     * Получение продуктов из json файла
     */
    List<Product> GetProductsFromJson();

    /**
     * Проливка продуктов в базу данных из json
     * @param productList продукты, полученные из json файла
     */
    void SaveProducts(List<Product> productList);

    /**
     * Полная очистка продуктов в базе данных
     */
    void DeleteAllProducts();
}

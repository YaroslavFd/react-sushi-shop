package ru.yaroslavfd.reactsushishopback.configuration;

import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import ru.yaroslavfd.reactsushishopback.configuration.service.ProductDataConfigurationService;
import ru.yaroslavfd.reactsushishopback.product.entity.Product;

import java.util.List;

@AllArgsConstructor
@Service
public class ProductDataConfiguration implements CommandLineRunner {

    ProductDataConfigurationService productDataConfigurationService;

    public void UpdateProducts() {
        List<Product> productList = productDataConfigurationService.GetProductsFromJson();
        productDataConfigurationService.DeleteAllProducts();
        if (!CollectionUtils.isEmpty(productList)) {
            productDataConfigurationService.SaveProducts(productList);
        }
    }

    @Override
    public void run(String... args) {
        UpdateProducts();
    }
}

package ru.yaroslavfd.reactsushishopback.product.mapper;

import org.mapstruct.Mapper;
import ru.yaroslavfd.reactsushishopback.product.entity.Product;
import ru.yaroslavfd.reactsushishopback.product.model.WebProduct;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    List<WebProduct> map(List<Product> products);
}

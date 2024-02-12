package ru.yaroslavfd.reactsushishopback.product.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Setter
@Getter
@Schema(description = "Модель продукта")
public class WebProduct {

    @Schema(description = "Уникальный индентификатор продукта")
    private UUID productUuid;

    @Schema(description = "Название продукта")
    private String name;

    @Schema(description = "Код продукта в системе")
    private String code;

    @Schema(description = "Ссылка на картинку для продукта")
    private String imageUrl;

    @Schema(description = "Общий вес продукта")
    private Integer weight;

    @Schema(description = "Описание составляющих продукта")
    private String description;

    @Schema(description = "Пищевая ценносить продукта")
    private Integer nutritionalValue;

    @Schema(description = "Количество белков в проудкту")
    private Integer squirrels;

    @Schema(description = "Количество жиров в продукте")
    private Integer fats;

    @Schema(description = "Количество углеводов в продукте")
    private Integer carbohydrates;

    @Schema(description = "Энергетическая ценность продукта")
    private Integer energyValue;

    @Schema(description = "Тип продукта")
    private ProductType productType;
}

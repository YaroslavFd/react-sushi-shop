package ru.yaroslavfd.reactsushishopback.product.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import ru.yaroslavfd.reactsushishopback.product.model.ProductType;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@NoArgsConstructor
@Entity
@Data
@Table(name = "PRODUCT")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private long id;

    /**
     * Уникальный индентификатор продукта
     */
    @Column(nullable = false)
    private UUID productUuid;

    /**
     * Название продукта
     */
    @Column(nullable = false)
    private String name;

    /**
     * Код продукта в системе
     */
    @Column(nullable = false)
    private String code;

    /**
     * Ссылка на картинку для продукта
     */
    @Column(nullable = false)
    private String imageUrl;

    /**
     * Общий вес продукта
     */
    @Column(nullable = false)
    private Integer weight;

    /**
     * Описание составляющих продукта
     */
    @Column(nullable = false)
    private String description;

    /**
     * Пищевая ценносить продукта
     */
    @Column(nullable = false)
    private Integer nutritionalValue;

    /**
     * Количество белков в проудкту
     */
    @Column(nullable = false)
    private Integer squirrels;

    /**
     * Количество жиров в продукте
     */
    @Column(nullable = false)
    private Integer fats;

    /**
     * Количество углеводов в продукте
     */
    @Column(nullable = false)
    private Integer carbohydrates;

    /**
     * Энергетическая ценность продукта
     */
    @Column(nullable = false)
    private Integer energyValue;

    /**
     * Тип продукта
     */
    @Column(nullable = false)
    private ProductType productType;

    /**
     * Время создания записи
     */
    @Column(nullable = false, updatable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;

    /**
     * Время последнего обновления записи
     */
    @Column(nullable = false)
    @UpdateTimestamp
    private LocalDateTime lastUpdatedAt;
}

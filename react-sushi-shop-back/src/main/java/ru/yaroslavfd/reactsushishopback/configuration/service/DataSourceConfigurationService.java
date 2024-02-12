package ru.yaroslavfd.reactsushishopback.configuration.service;

import javax.sql.DataSource;

public interface DataSourceConfigurationService {

    /**
     * Создание основной встроенной H2 базы данных
     * @return база данных H2
     */
    DataSource createMainDataSource();
}

package ru.yaroslavfd.reactsushishopback.configuration;

import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import ru.yaroslavfd.reactsushishopback.configuration.service.DataSourceConfigurationService;

import javax.sql.DataSource;

@AllArgsConstructor
@Configuration
public class DataSourceConfiguration {

    DataSourceConfigurationService dataSourceConfigurationService;

    @Bean
    public DataSource createMainDataSource() {
        return dataSourceConfigurationService.createMainDataSource();
    }
}

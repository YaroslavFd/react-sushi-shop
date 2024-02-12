package ru.yaroslavfd.reactsushishopback.configuration.service;

import lombok.extern.slf4j.Slf4j;
import org.h2.jdbcx.JdbcDataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;

@Service
@Slf4j
public class DataSourceConfigurationServiceImpl implements DataSourceConfigurationService {
    private static final String TEMP_DIRECTORY = System.getProperty("java.io.tmpdir");

    @Value("${spring.datasource.username}")
    private String DATABASE_USER;

    @Value("${spring.datasource.password}")
    private String DATABASE_PASSWORD;

    @Override
    public DataSource createMainDataSource() {
        try {
            JdbcDataSource ds = new JdbcDataSource();
            ds.setURL("jdbc:h2:" + TEMP_DIRECTORY + "/" + DATABASE_USER);
            ds.setUser(DATABASE_USER);
            ds.setPassword(DATABASE_PASSWORD);
            return ds;
        } catch (Exception e) {
            log.error("createMainDataSource: error when try to create H2 db: ", e);
        }
        return null;
    }
}

package ru.yaroslavfd.reactsushishopback.utils.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@Profile("DEV")
public class UtilsServiceImpl implements UtilsService {
    @Override
    public void HealthCheck() {
        log.info("Health check passed");
    }
}

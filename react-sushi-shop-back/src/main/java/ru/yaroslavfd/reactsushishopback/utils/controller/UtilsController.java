package ru.yaroslavfd.reactsushishopback.utils.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.yaroslavfd.reactsushishopback.utils.service.UtilsService;

@RestController
@AllArgsConstructor
public class UtilsController {
    private static final String HEALTH_CHECK = "/health";

    UtilsService utilsService;

    @GetMapping(HEALTH_CHECK)
    void HealthCheck() {
        utilsService.HealthCheck();
    }
}

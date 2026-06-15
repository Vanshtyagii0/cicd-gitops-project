package com.example.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.time.LocalDateTime;
import java.util.Map;

@RestController
public class BackendController {

    private static final Logger logger = LoggerFactory.getLogger(BackendController.class);

    @GetMapping("/health")
    public Map<String, String> health() {
        logger.info("Health check called");
        return Map.of(
            "status", "healthy",
            "service", "java-backend",
            "timestamp", LocalDateTime.now().toString()
        );
    }

    @GetMapping("/api/message")
    public Map<String, String> message() {
        logger.info("Message endpoint called");
        return Map.of(
            "message", "Hello from Java Backend! ☕",
            "service", "java-backend",
            "timestamp", LocalDateTime.now().toString()
        );
    }
}

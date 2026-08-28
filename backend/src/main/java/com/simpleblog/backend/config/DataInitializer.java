package com.simpleblog.backend.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.simpleblog.backend.entity.Post;
import com.simpleblog.backend.repository.PostRepository;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initializeDatabase(PostRepository postRepository) {
        return args -> {
            if (postRepository.count() == 0) {
                postRepository.save(new Post(
                    "Hello SimpleBlog",
                    "This is our first post."
                ));

                postRepository.save(new Post(
                    "Our Java Backend",
                    "Spring Boot is running!"
                ));
            }
        };
    }
}
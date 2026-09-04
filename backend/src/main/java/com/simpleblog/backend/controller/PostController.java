package com.simpleblog.backend.controller;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.simpleblog.backend.entity.Post;
import com.simpleblog.backend.repository.PostRepository;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    private final PostRepository postRepository;
    private final JdbcTemplate jdbcTemplate;

    public PostController(PostRepository postRepository, JdbcTemplate jdbcTemplate) {
        this.postRepository = postRepository;
        this.jdbcTemplate = jdbcTemplate;
    }

    @GetMapping
    public List<Post> getPosts() {
        return postRepository.findAll();
    }

    @PatchMapping
    public void updatePostTitle(@RequestParam Long id, @RequestParam String title) {
        
        jdbcTemplate.execute("update posts set title=" + title + "wehre id=" + id.toString());
    }
}

package com.simpleblog.backend.controller;

import com.simpleblog.backend.entity.Post;
import com.simpleblog.backend.repository.PostRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

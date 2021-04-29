package com.example.webapp.Controllers;

import com.example.webapp.Models.Comment;
import com.example.webapp.Models.Issue;
import com.example.webapp.Services.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CommentController {
    CommentService commentService;

    @GetMapping("comments/{id}")
    public Comment getCommentById(@PathVariable Long id){
        return  commentService.findCommentById(id);
    }


    @GetMapping("issues/{iid}/comments")
    public List<Comment> getCommentsByIssueId(@PathVariable Long iid){
        return  commentService.findCommentsByIssueId(iid);
    }

    @PostMapping("comments/")
    @ResponseStatus(HttpStatus.CREATED)
    public Comment saveComment(@RequestBody Comment comment){
        return commentService.saveComment(comment);
    }

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }
}

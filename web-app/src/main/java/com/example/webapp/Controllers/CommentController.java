package com.example.webapp.Controllers;

import com.example.webapp.Models.Comment;
import com.example.webapp.Models.Issue;
import com.example.webapp.Services.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
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

    @PutMapping("/comments/{id}")
    public ResponseEntity<Comment> updateComment(@PathVariable(value = "id") Long commentId,
                                                 @RequestBody Comment commentDetails) throws Exception {
        Comment comment= commentService.findCommentById(commentId);
        if(comment==null) throw new Exception("Comment not found for this id :: " + commentId);

        comment.setCid(commentDetails.getCid());
        comment.setDescription(commentDetails.getDescription());
        comment.setIssue(commentDetails.getIssue());
        final Comment updatedComment = commentService.save(comment);
        return ResponseEntity.ok(updatedComment);
    }

    @DeleteMapping("/comments/{id}")
    void deleteComment(@PathVariable Long id) {
        commentService.deleteById(id);
    }


    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }
}

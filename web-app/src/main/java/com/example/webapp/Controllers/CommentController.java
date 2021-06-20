package com.example.webapp.Controllers;

import com.example.webapp.Models.Comment;
import com.example.webapp.Models.CommentAdapter;
import com.example.webapp.Models.Issue;
import com.example.webapp.Services.CommentService;
import com.example.webapp.Services.IssueService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class CommentController {
    CommentService commentService;
    IssueService    issueService;

    @GetMapping("comments/{id}")
    public Comment getCommentById(@PathVariable Long id){
        return  commentService.findCommentById(id);
    }


    @GetMapping("issues/comments/{iid}")
    public List<Comment> getCommentsByIssueId(@PathVariable Long iid){
        return  commentService.findCommentsByIssueId(iid);
    }

    @PostMapping("comments/")
    @ResponseStatus(HttpStatus.CREATED)
    public Comment saveComment(@RequestBody CommentAdapter comment){
        // SPRAWDZAC CZY ISSUE NIE JEST ZAMKNIETE I WYRZUCAC WTEDY BLAD
        System.out.println("OLD COMMENT"+comment);
        Comment newComment=new Comment();
        newComment.setDescription(comment.getDescription());
        System.out.println();
        Issue issue=issueService.findIssueById(comment.getIssue());
        System.out.println("ISISE ZNALEZIONE"+issue);
        newComment.setIssue(issue);
        System.out.println("COMMENT Z METODY"+comment);
        System.out.println("NEW COMMENT"+newComment);
        return commentService.saveComment(newComment);
    }

   /* @PostMapping("comments/")
    public CommentAdapter saveCommentOld(@RequestBody CommentAdapter commentAdapter){
        System.out.println(commentAdapter);

        return commentAdapter;
      //  return commentService.saveComment(comment);
    }*/

    @PutMapping("/comments/")
    public ResponseEntity<Comment> updateComment(@RequestBody CommentAdapter commentAdapter) throws Exception {
        /*Comment comment= commentService.findCommentById(commentId);
        if(comment==null) throw new Exception("Comment not found for this id :: " + commentId);

        comment.setCid(commentDetails.getCid());
        comment.setDescription(commentDetails.getDescription());
        comment.setIssue(commentDetails.getIssue());
        final Comment updatedComment = commentService.save(comment);*/
        Comment comment=commentService.findCommentById(commentAdapter.getCid());
        comment.setDescription(commentAdapter.getDescription());
        commentService.save(comment);
        return ResponseEntity.ok(comment);
    }

    @DeleteMapping("/comments/{id}")
    void deleteComment(@PathVariable Long id) {
        commentService.deleteById(id);
    }


    public CommentController(CommentService commentService, IssueService issueService) {
        this.commentService = commentService;
        this.issueService = issueService;
    }
}

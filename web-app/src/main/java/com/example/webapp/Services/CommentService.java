package com.example.webapp.Services;


import com.example.webapp.Models.Comment;
import com.example.webapp.Repositories.CommentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    CommentRepository commentRepository;

    public List<Comment> findCommentsByIssueId(Long iid){
        return commentRepository.findCommentsByIssue_Iid(iid);
    }

    public Comment saveComment(Comment comment){
        return commentRepository.save(comment);
    }
    public Comment findCommentById(Long id){
        return  commentRepository.findCommentByCid(id);
    }

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }
}

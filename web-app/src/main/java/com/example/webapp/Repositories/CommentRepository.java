package com.example.webapp.Repositories;

import com.example.webapp.Models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment,Long> {
        public Comment findCommentByCid(Long id);

        public List<Comment>  findCommentsByIssue_Iid(Long iid);

}

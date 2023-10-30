import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from 'src/app/services/comments.service';
import { Comment } from '../../models/comment'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{

  comment!: Comment
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(){
    this.getAll();
  }

  getAll(){
    return this.commentService.getComments().subscribe(comments =>{
      this.comments = comments;
    });
  }

  getById(id: number){
    return this.commentService.getComment(id).subscribe(comment => {
      this.comment = comment;
    });
  }

  update(id:number, comment: Comment){
    if(id !== undefined){
    return this.commentService.updateComment(id, comment).subscribe(comment =>{
      const index = this.comments.findIndex(comment => comment.id === id);
      if(index !== -1){
        this.comments[index] = comment;
      }
    }
    )
  } else return;
    
  }

  delete(id?: number){
    if(id !== undefined){
      return this.commentService.deleteComment(id).subscribe(comment =>{
        this.comments = this.comments.filter(comment => comment.id !== id);
        })
      }  else{
        return ;
      }
    };
}

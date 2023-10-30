import { Component } from '@angular/core';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent {

  comment!: Comment
  comments: Comment[] = [];

  create(newComment: Comment) {
    this.comments.push(newComment);
  }
}

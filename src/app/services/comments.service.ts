import { Injectable } from '@angular/core';
import {Comment} from '../models/comment'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

const URL = "https://jsonplaceholder.typicode.com/comments";
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comments: Comment[] = [];
  comment: Comment | null= null;

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]>{
    return this.http.get<Comment[]>(URL);
  }

  createComment(comment: Comment): Observable<Comment>{
    return this.http.post<Comment>(URL, comment);
  }

  getComment(id: number): Observable<Comment> {
    return this.http.get<Comment>(`${URL}/${id}`);
  }

  updateComment(id: number, comment: Comment): Observable<Comment>{
    return this.http.put<Comment>(`${URL}/${id}`, comment);
  }

  deleteComment(id: number): Observable<Comment>{
    return this.http.delete<Comment>(`${URL}/${id}`);
  }
}

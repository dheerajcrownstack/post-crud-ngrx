import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IPost } from '../types/IPost';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${environment.baseUrl}posts`)
  }

  getPostDetail(postId: number): Observable<IPost> {
    return this.http.get<IPost>(`${environment.baseUrl}posts/${postId}`)
  }

  deletePost(postId: number) {
    return this.http.delete(`${environment.baseUrl}posts/${postId}`)
  }
}

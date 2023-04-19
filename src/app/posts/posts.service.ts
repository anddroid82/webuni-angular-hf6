import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  getPostsObservable():Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_page=0&_limit=10');
  }

  getPostDataObservable(id:number):Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/'+id);
  }
  
  getDeleteDataObservable(id:number):Observable<any> {
    return this.http.delete<any>('https://jsonplaceholder.typicode.com/posts/'+id);
  }
}

export interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}
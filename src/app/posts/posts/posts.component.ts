import { Component, OnInit } from '@angular/core';
import { PostsService, Post } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[] = [];

  constructor(private postService : PostsService){
  }

  ngOnInit(): void {
    this.postService.getPostsObservable().subscribe( p => {
      this.posts = p;
    });
  }

  deletePost(id:number,event:Event) {
    //console.log(id);
    this.postService.getDeleteDataObservable(id).subscribe( b => {
      this.posts = this.posts.filter( p => p.id!==id);
    });
    event.stopPropagation();
  }

}

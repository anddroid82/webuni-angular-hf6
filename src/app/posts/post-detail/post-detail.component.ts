import { Component, OnInit } from '@angular/core';
import { Post, PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  id:number;
  post:Post | undefined = undefined;
  user:any = undefined;

  constructor(private route:ActivatedRoute, private router:Router, private postService:PostsService){
    this.id=0;
    let _id=Number(route.snapshot.paramMap.get('id'));
    if (Number.isNaN(_id)) {
      console.log('hiba');
      router.navigateByUrl('/404',{skipLocationChange: true});
      return;
    }
    this.id = _id;
  }
  ngOnInit(): void {
    this.postService.getPostDataObservable(this.id).subscribe( p => {
      this.post = p;
      this.postService.getUserDataObservable(p.userId).subscribe( u => {
        this.user = u;
      })
    });

  }




}

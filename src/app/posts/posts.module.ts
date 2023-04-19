import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsService } from './posts.service';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
  ]
})
export class PostsModule { }

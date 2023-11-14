import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from 'src/app/store';
import { DeletePost, GetPostDetail, LoadPost } from 'src/app/store/post/post.action';
import { getPosts } from 'src/app/store/post/post.selector';
import { IPost } from 'src/app/types/IPost';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  posts: IPost[] = []
  
  constructor(
    private store: Store<IAppStore>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadPost())
    this.store.select(getPosts).subscribe((res: any) => {
      this.posts = res;
      console.log(res);
    })
  }

  viewPost(postId: string) {
    this.store.dispatch(new GetPostDetail({postId}))
  }

  deletePost(postId: string) {
    this.store.dispatch(new DeletePost({postId}))
  }

}

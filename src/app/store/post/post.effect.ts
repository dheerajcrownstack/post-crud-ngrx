import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, catchError, map, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { GetPostDetailSuccess, LoadPost, LoadPostSuccess, POSTACTIONENUM } from './post.action';
import { IPost } from 'src/app/types/IPost';
import { IAction } from 'src/app/types/IAction';

@Injectable()
export class PostEffect {

    loadPosts$ = createEffect(() => this.action$.pipe(
        ofType(POSTACTIONENUM.LOAD_POST),
        switchMap(() => this.apiService.getPosts().pipe(
            map((posts: any) => new LoadPostSuccess({posts: posts})),
            catchError(() => EMPTY)
        )
    )));

    loadPostDetail$ = createEffect(() => this.action$.pipe(
        ofType(POSTACTIONENUM.GET_POST_DETAIL),
        switchMap((action: IAction) => this.apiService.getPostDetail(action.payload.postId).pipe(
            map((post: any) => new GetPostDetailSuccess({post})),
            catchError(() => EMPTY)
        )
    )));

    deletePost$ = createEffect(() => this.action$.pipe(
        ofType(POSTACTIONENUM.DELETE_POST),
        switchMap((action: IAction) => this.apiService.deletePost(action.payload.postId).pipe(
            map(() => new LoadPost()),
            catchError(() => EMPTY)
        )
    )));

    constructor(
        private apiService: ApiService,
        private action$: Actions
    ) {}
}

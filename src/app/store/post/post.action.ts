import { IAction } from "src/app/types/IAction";
import { IPost } from "src/app/types/IPost";

export enum POSTACTIONENUM {
    LOAD_POST = "loadPost",
    LOAD_POST_SUCCESS = "loadPostSuccess",
    LOAD_POST_FAILED = "loadPostFailed",
    DELETE_POST = "deletePost",
    GET_POST_DETAIL = "getPostDetail",
    GET_POST_DETAIL_SUCCESS = "getPostDetailSuccess",
    GET_POST_DETAIL_FAILED = "getPostDetailFailed",
}

export class LoadPost implements IAction {
    readonly type = POSTACTIONENUM.LOAD_POST
}

export class LoadPostSuccess implements IAction {
    readonly type = POSTACTIONENUM.LOAD_POST_SUCCESS
    constructor(
        public payload: { posts: IPost[]}
    ) {}
}

export class LoadPostFailed implements IAction {
    readonly type = POSTACTIONENUM.LOAD_POST_FAILED
    constructor(
        public payload: { posts: []}
    ) {}
}

export class GetPostDetail implements IAction {
    readonly type = POSTACTIONENUM.GET_POST_DETAIL
    constructor(
        public payload: { postId: string}
    ) {}
}

export class GetPostDetailSuccess implements IAction {
    readonly type = POSTACTIONENUM.GET_POST_DETAIL_SUCCESS
    constructor(
        public payload: { post: IPost}
    ) {}
}

export class GetPostDetailFailed implements IAction {
    readonly type = POSTACTIONENUM.GET_POST_DETAIL_FAILED
    constructor(
        public payload: { post: null}
    ) {}
}

export class DeletePost implements IAction {
    readonly type = POSTACTIONENUM.DELETE_POST
    constructor(
        public payload: { postId: string}
    ) {}
}

export type PostActions =
    LoadPost | LoadPostSuccess | LoadPostFailed | GetPostDetail |
    GetPostDetailSuccess | GetPostDetailFailed | DeletePost;

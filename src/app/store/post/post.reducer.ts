import { IAction } from "src/app/types/IAction";
import { IPost } from "src/app/types/IPost";
import { POSTACTIONENUM } from "./post.action";

export interface IPostInitialState {
    posts: IPost[],
    postDetail: IPost | null,
    success: boolean,
    failed: boolean
}

const initialState: IPostInitialState = {
    posts: [],
    postDetail: null,
    success: false,
    failed: false,
}

export const postReducer = (state: IPostInitialState = initialState, action: IAction) => {
    switch (action.type) {
        case POSTACTIONENUM.LOAD_POST:
            return {
                ...state
            }
        case POSTACTIONENUM.LOAD_POST_SUCCESS:
            return {
                ...state,
                posts: action.payload.posts,
                success: true,
                failed: false,
            }
        case POSTACTIONENUM.LOAD_POST_SUCCESS:
            return {
                ...state,
                posts: action.payload.posts,
                success: false,
                failed: true,
            }
        case POSTACTIONENUM.GET_POST_DETAIL:
            return {
                ...state
            }
        case POSTACTIONENUM.GET_POST_DETAIL_SUCCESS:
            return {
                ...state,
                postDetail: action.payload.post
            }
        case POSTACTIONENUM.GET_POST_DETAIL_FAILED:
            return {
                ...state,
                postDetail: null
            }
        case POSTACTIONENUM.DELETE_POST:
            return {
                ...state
            }
        default:
            return state;
    }
}

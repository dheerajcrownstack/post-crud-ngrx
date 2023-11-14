import { IAction } from "src/app/types/IAction";
import { IPost } from "src/app/types/IPost";
import { POSTACTIONENUM } from "./post.action";

export interface IPostInitialState {
    posts: IPost[],
    success: boolean,
    failed: boolean
}

const initialState: IPostInitialState = {
    posts: [],
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
        default:
            return state;
    }
}

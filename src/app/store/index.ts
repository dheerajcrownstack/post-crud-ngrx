import {ActionReducerMap} from '@ngrx/store';
import { IPostInitialState, postReducer } from "./post/post.reducer";
import { PostEffect } from './post/post.effect';

export interface IAppStore {
    postState: IPostInitialState
}

export const AppReducer: ActionReducerMap<IAppStore> = {
    postState: postReducer
}

export const AppEffects = [
    PostEffect
]

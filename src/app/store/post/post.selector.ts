import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPostInitialState } from './post.reducer';


const getPostState = createFeatureSelector<IPostInitialState>('postState')

export const getPosts = createSelector(getPostState, (state) => state.posts);
export const getSuccess = createSelector(getPostState, (state) => state.success)
export const getFailed = createSelector(getPostState, (state) => state.failed)


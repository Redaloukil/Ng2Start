import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ListState, AppState } from '../reducers/index';

export const getListState = (state : AppState ) => state.list;


export const getListData = createSelector(
  getListState,
  data => data.TodoList
);




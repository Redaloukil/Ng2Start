import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ListState, AppState } from '../reducers/index';

export const getListState = createFeatureSelector<ListState>('list');


export const getListData = createSelector(
  getListState,
  data => { 
    console.log(data); 
    return data.TodoList  
  },
);




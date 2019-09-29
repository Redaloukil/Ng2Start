import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ListState, AppState, EditState } from '../reducers/index';

export const getEditState = createFeatureSelector<AppState>('edit');


export const getEditTitleData = createSelector(
  getEditState,
  data => data.edit.title
);

export const getEditDescriptionData = createSelector(
    getEditState ,
    data => data.edit.description
)

export const getEditChecked = createSelector(
    getEditState ,
    data => data.edit.checked
)



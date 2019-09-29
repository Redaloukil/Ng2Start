import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ListState, AppState, EditState } from '../reducers/index';

export const getEditState = (state:AppState) => state.edit ;


export const getEditTitleData = createSelector(
  getEditState,
  edit => edit.title
);

export const getEditDescriptionData = createSelector(
    getEditState ,
   edit =>edit.description
)

export const getEditChecked = createSelector(
    getEditState ,
    edit => edit.checked
)



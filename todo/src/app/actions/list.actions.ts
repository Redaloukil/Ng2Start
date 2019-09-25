import { Action } from '@ngrx/store';

export enum ListActionTypes {
  LoadLists = '[List] Load Lists',
  ChangeFilterLists = '[List] Filter Lists',  
  DeleteLists = '[List] Delete Lists'
}

export class LoadLists implements Action {
  readonly type = ListActionTypes.LoadLists;
}




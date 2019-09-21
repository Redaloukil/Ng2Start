import { Action } from '@ngrx/store';

export enum ListActionTypes {
  LoadLists = '[List] Load Lists',
  
  
}

export class LoadLists implements Action {
  readonly type = ListActionTypes.LoadLists;
}


export type ListActions = LoadLists;

import { Action } from '@ngrx/store';

export enum EditActionTypes {
  LoadEdits = '[Edit] Load Edits',
  
  
}

export class LoadEdits implements Action {
  readonly type = EditActionTypes.LoadEdits;
}


export type EditActions = LoadEdits;

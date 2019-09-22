import { Action } from '@ngrx/store';

export enum EditActionTypes {
  LoadEdits = '[Edit] Load Edits',
  SubmitEdit = '[Edit] Submit Edit',
  ChangeEditField = '[Edit] Change Edit Field',

}

export class LoadEdits implements Action {
  readonly type = EditActionTypes.LoadEdits;
}




export type EditActions = LoadEdits;

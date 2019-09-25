import { Action } from '@ngrx/store';
import { Todo } from '../utils/Todo';

export enum EditActionTypes {
  LoadEdits = '[Edit] Load Edits',
  SubmitEdit = '[Edit] Submit Edit',
  ChangeEditTitle = '[Edit] Change Edit Title',
  ChangeEditDescription = '[Edit] Change Edit Description',
  ChangeEditChecked = '[Edit] Change Edit Checked',
}

export class LoadEdits implements Action {
  readonly type = EditActionTypes.LoadEdits;
}
 
export class ChangeEditField implements Action {
  readonly type = EditActionTypes.ChangeEditTitle;
   public value:string;
}

export class ChangeEditDescription implements Action {
  readonly type = EditActionTypes.ChangeEditDescription;
   public value:string;
}

export class ChangeEditChecked implements Action {
  readonly type = EditActionTypes.ChangeEditChecked;
   public value:string;
}

export class SubmitEdit implements Action {
  readonly type = EditActionTypes.SubmitEdit;
  public value:Todo;
}








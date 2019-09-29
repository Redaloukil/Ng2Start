import { Action } from '@ngrx/store';
import { Todo } from '../utils/Todo';

export enum EditActionTypes {
  LoadEdits = '[Edit] Load Edits',
  SubmitEdit = '[Edit] Submit Edit',
  ChangeEditTitle = '[Edit] Change Edit Title',
  ChangeEditDescription = '[Edit] Change Edit Description',
  ChangeEditChecked = '[Edit] Change Edit Checked',
}

export class EditAction implements Action {
  constructor(public type : string){}
}
 
export class LoadEdit extends EditAction {
  constructor(){
    super(EditActionTypes.LoadEdits)
  }
}

export class SubmitEdit extends EditAction {
  constructor(public payload : Todo){
    super(EditActionTypes.SubmitEdit)
  }
}

export class ChangeEditTitle extends EditAction {
  constructor(value : string , key : string){
    super(EditActionTypes.ChangeEditTitle)
  }
}

export class ChangeEditDescription extends EditAction {
  constructor(value : string , key : string){
    super(EditActionTypes.ChangeEditTitle)
  }
}

export class ChangeEditChecked extends EditAction {
  constructor(value : string , key : string){
    super(EditActionTypes.ChangeEditTitle)
  }
}









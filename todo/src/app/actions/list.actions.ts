import { Action } from '@ngrx/store';
import { Todo } from '../utils/Todo';
import { extend } from 'webdriver-js-extender';


export enum ListActionTypes {
  LoadLists = '[List] Load Lists',
  ChangeFilterLists = '[List] Filter Lists',  
  DeleteLists = '[List] Delete Lists'
}

export class LoadAction implements Action {
  constructor(public type : string){};
}

export class LoadLists extends LoadAction {
  
  constructor(public payload : Todo[]){
    super(ListActionTypes.LoadLists);
  }
}

export class ChangeFilter extends LoadAction {
  constructor(public payload : string){
    super(ListActionTypes.ChangeFilterLists);
  }
}

export class DeleteLists extends LoadAction {
  constructor(){
    super(ListActionTypes.DeleteLists);
  }
}


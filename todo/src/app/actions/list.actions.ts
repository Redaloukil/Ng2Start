import { Action } from '@ngrx/store';
import { Todo } from '../utils/Todo';
import { extend } from 'webdriver-js-extender';


export enum ListActionTypes {
  LoadLists = '[List] Load Lists',
  ChangeFilterLists = '[List] Filter Lists',  
  DeleteLists = '[List] Delete Lists',
  AddTodoList = '[List] Add Lists',
}

export class ListAction implements Action {
  constructor(public type : string){};
}

export class LoadLists extends ListAction {
  
  constructor(public payload : Todo[]){
    super(ListActionTypes.LoadLists);
    
  }

  
}

export class ChangeFilter extends ListAction {
  constructor(public payload : string){
    super(ListActionTypes.ChangeFilterLists);
  }
}

export class DeleteLists extends ListAction {
  constructor(){
    super(ListActionTypes.DeleteLists);
  }
}

export class AddTodoList extends ListAction {
  constructor(public payload : Todo){
    super(ListActionTypes.AddTodoList)
  }
}
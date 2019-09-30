import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  ActionType
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { routerReducer, RouterReducerState} from '@ngrx/router-store';
import { EditActionTypes } from '../actions/edit.actions';
import { ListActionTypes, ListAction } from '../actions/list.actions';
import { Todo } from '../utils/Todo';
import { Action } from 'rxjs/internal/scheduler/Action';



export interface ListState {
  TodoList : Todo[] ,
  filter : string ,
}

export interface EditState {
  title : string | null ,
  description : string | null , 
  checked : boolean,
}

export interface AppState {
  router?:RouterReducerState,
  edit: EditState,
  list: ListState,
}

//Initial state for Editor and TodoList
const InitialEditState = { 
  title : '',
  description : '',
  checked : false,
}

const InitialListState = {
  TodoList : [],
  filter : '',
}


export function EditReducer(state:EditState = InitialEditState, action : any): EditState {
  switch (action.type) {
    case EditActionTypes.LoadEdits:
      return {
        title : '' ,
        description : '',
        checked : false,
      };
    case EditActionTypes.ChangeEditTitle :
      return {
        ...state,
        title:action.value,
      }
    case EditActionTypes.ChangeEditDescription : 
      return {
        ...state,
        description : action.value,
      }
    case EditActionTypes.ChangeEditChecked : 
      return {
        ...state,
        checked : false, 
      }
    default:
      return state;
  }
}

export function ListReducer(state:ListState = InitialListState, action : any): ListState {
  switch (action.type) {
    case ListActionTypes.LoadLists:
      return {
        ...state,
        TodoList : action.payload,
      };
    case ListActionTypes.AddTodoList :
      let newTodos = state.TodoList;
      newTodos.push(action.payload);
      return {
        ...state,
        TodoList : newTodos,
      }
    case ListActionTypes.ChangeFilterLists:
      return {
        ...state
      }
    case ListActionTypes.DeleteLists :
      const removedTodos = state.TodoList;
      removedTodos.splice(action.index , 1)
      return {
        ...state,
        TodoList :removedTodos,
      }
    default:
      return state;
  }
}

export const selectTodos = (state: AppState) => state.list.TodoList;




export const reducers : ActionReducerMap<AppState> = {
  router : routerReducer,
  list : ListReducer,
  edit : EditReducer,
}




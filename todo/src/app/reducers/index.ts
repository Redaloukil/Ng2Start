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
        title : action.value ,
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
    case ListActionTypes.ChangeFilterLists:
      return {
        ...state
      }
    case ListActionTypes.DeleteLists :
      return {
        TodoList : [],
        filter :'',
      }
    default:
      return state;
  }
}

export const selectTodos = (state: AppState) => state.TodoList;




export const reducers : ActionReducerMap<AppState> = {
  router : routerReducer,
  list : ListReducer,
  edit : EditReducer,
   
}




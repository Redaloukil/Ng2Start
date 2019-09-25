import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { EditActionTypes } from '../actions/edit.actions';
import { ListActionTypes } from '../actions/list.actions';
import { Todo } from '../utils/Todo';

export interface ListState {
  TodoList : Todo[] | [],
  filter : string ,
}

export interface EditState {
  title : string | null ,
  description : string | null , 
  checked : boolean,
}

export interface AppState {
  Edit: EditState;
  ListState: ListState;
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


export function EditReducer(state:EditState = InitialEditState, action): EditState {
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
        title :  action.value ,
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

export function ListReducer(state:ListState = InitialListState, action): ListState {
  switch (action.type) {
    case ListActionTypes.LoadLists:
      return {
        ...state,
        TodoList : action.payload,
      };
    case ListActionTypes.ChangeFilterLists:
      return {
        filter : action.payload,
        TodoList : [],
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

export const selectTodos = (state: AppState) => state.ListState.TodoList;




// export const reducers: ActionReducerMap<AppState> = {
  
// };


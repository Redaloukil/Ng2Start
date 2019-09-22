import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { EditActions, EditActionTypes } from '../actions/edit.actions';
import { ListActions, ListActionTypes } from '../actions/list.actions';
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


export function EditReducer(state:EditState = InitialEditState, action: EditActions): EditState {
  switch (action.type) {
    case EditActionTypes.LoadEdits:
      return {
        ...state
      };

    default:
      return state;
  }
}

export function ListReducer(state:ListState = InitialListState, action: ListActions): ListState {
  switch (action.type) {
    case ListActionTypes.LoadLists:
      return {
        ...state
      };

    default:
      return state;
  }
}



export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

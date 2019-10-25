import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ApplicationState } from '../states/state';



export const reducers: ActionReducerMap<ApplicationState> = {
  ,

};


export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];

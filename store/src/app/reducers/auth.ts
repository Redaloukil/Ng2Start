
import { Action } from '@ngrx/store';
import { LoginActionsTypes } from '../actions/auth/loginActions';
import { ApplicationState, AuthState } from '../states/state';
import { SignupActionsTypes } from '../actions/auth/signupActions';

export function authReducer(state:ApplicationState,action:Action):ApplicationState{
    switch(action.type){
        case LoginActionsTypes.LOGIN_REQUEST:
        case SignupActionsTypes.SIGNUP_REQUEST:    
            return {
                ...state,
                isLoading:true,
            }
        case LoginActionsTypes.LOGIN_SUCCESS:
        case SignupActionsTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading:false,
            }
        case LoginActionsTypes.LOGIN_FAILURE:
        case SignupActionsTypes.SIGNUP_FAILURE:
            return {
                ...state,
                isLoading:true,
            }
    }
}
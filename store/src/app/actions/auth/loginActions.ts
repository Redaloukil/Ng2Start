import { Action } from '@ngrx/store';
import { User, AuthenticatedUser } from '../../structures/User';

export enum LoginActionsTypes {
    LOGIN_REQUEST = "[AUTH-LOGIN]LOGIN_REQUEST",
    LOGIN_SUCCESS = "[AUTH-LOGIN]LOGIN_SUCCESS",
    LOGIN_FAILURE = "[AUTH-LOGIN]LOGIN_FAILURE",

    CURRENT_REQUEST = "[AUTH-CURRENT]CURRENT_REQUEST",
    CURRENT_SUCCESS = "[AUTH-CURRENT]CURRENT_SUCCESS",
    CURRENT_FAILURE = "[AUTH-CURRENT]CURRENT_FAILURE",
}

export class LoginRequest implements Action { 
    readonly type = LoginActionsTypes.LOGIN_REQUEST
    constructor(private payload:User){}
}

export class LoginSuccess implements Action{
    readonly type = LoginActionsTypes.LOGIN_SUCCESS
    constructor(private payload:AuthenticatedUser){}
}

export class LoginFailure implements Action{
    readonly type = LoginActionsTypes.LOGIN_FAILURE
    constructor(private payload:Error){}
}
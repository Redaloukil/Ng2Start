import { Action } from '@ngrx/store';
import { User, AuthenticatedUser } from '../../structures/User';



export enum SignupActionsTypes {
    SIGNUP_REQUEST = "[AUTH-SIGNUP]SIGNUP_REQUEST",
    SIGNUP_SUCCESS = "[AUTH-SIGNUP]SIGNUP_SUCCESS",
    SIGNUP_FAILURE = "[AUTH-SIGNUP]SIGNUP_FAILURE",
}

export class SignupRequest implements Action{
    readonly type = SignupActionsTypes.SIGNUP_REQUEST
    constructor(private payload:User){}
}

export class SignupSuccess implements Action{
    readonly type = SignupActionsTypes.SIGNUP_REQUEST
    constructor(private payload:AuthenticatedUser){}
}

export class SignupFailure implements Action{
    readonly type = SignupActionsTypes.SIGNUP_REQUEST
    constructor(private payload:Error){}
}
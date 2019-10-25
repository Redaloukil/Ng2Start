import { User } from '../structures/User';

export interface ApplicationState {
    auth:AuthState,
    isLoading:boolean,
}

export interface AuthState {
    user:User
}
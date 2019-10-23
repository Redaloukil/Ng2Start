import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Token } from '../structures/Token';
import { User, AuthenticatedUser} from '../structures/User';
import { Authenticated } from '../guards/authentication';



@Injectable()

export class AuthService {
    constructor(private http:HttpClient){}
    
    login(email:string,password:string):Token{
        return {
            token:'string',
        }
    }
    signup(email,password):Token{
        return {
            token:'string',
        }
    }
    confirmToken(token:string):AuthenticatedUser{
        return {
            email:'string',
            password:'string',
            token:'string',
        }
    }
    getCurrent(token:string):AuthenticatedUser{
        return {
            email:'string',
            password:'string',
            token:'string',
        }
    }
}
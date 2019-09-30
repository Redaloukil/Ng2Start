import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './utils/Todo';




@Injectable()
export class AppService {
    
    constructor(private http : HttpClient){}

    todos : Todo[] = [
        
    ]
    
    getTodos(){
        return this.todos;
    }

}
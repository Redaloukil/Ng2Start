import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './utils/Todo';




@Injectable()
export class AppService {
    
    constructor(private http : HttpClient){}

    todos : Todo[] = [
        {   
            "title" : "titleA" , 
            "description" : "Description of title A" , 
            "checked" : false
        },
        {   
            "title" : "titleB" , 
            "description" : "Description of title B" , 
            "checked" : false
        },
        {   
            "title" : "titleC" , 
            "description" : "Description of title C" , 
            "checked" : false
        }
    ]
    
    getTodos(){
        return this.todos;
    }

}
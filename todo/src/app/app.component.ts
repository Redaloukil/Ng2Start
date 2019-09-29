import { Component  , OnInit} from '@angular/core';
import { Todo } from './utils/Todo';
import { AppService } from './app.service';
import { Store  } from '@ngrx/store';
import { Observable, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { State } from '@ngrx/store';
import { AppState } from './reducers';
import * as fromList from './actions/list.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  constructor(private state : Store<AppState>,private appService:AppService , private http:HttpClient ){}

  ngOnInit(){
    //load the todos file to the state 
    
    const todos = this.appService.getTodos();
    this.state.dispatch(new fromList.LoadLists(todos));
    

  } 


}

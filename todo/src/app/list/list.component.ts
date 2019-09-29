import { Component, OnInit } from '@angular/core';
import { Todo } from '../utils/Todo';
import { Store, select } from '@ngrx/store';
import {Actions , ofType} from '@ngrx/effects'
import '../actions/list.actions';
import * as fromList from '../actions/list.actions';
import { AppState, selectTodos } from '../reducers';
import { getListData } from './list.selector';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  constructor(private store : Store<AppState>) { }

  todos :Observable<Todo[]>;

  ngOnInit() {
    // load the todo list 
    this.todos = this.store.select(getListData).pipe(
      map((data)=> {
        return data
      })
    )
    
  }

  onChangefilter(){
    this.store.dispatch(new fromList.ChangeFilter('checked'));
  }

  onSubmit(){
    
  }



  

}

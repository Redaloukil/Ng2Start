import { Component, OnInit } from '@angular/core';
import { Todo } from '../utils/Todo';
import { Store, select } from '@ngrx/store';
import {Actions , ofType} from '@ngrx/effects'
import '../actions/list.actions';
import { ListActionTypes, ChangeFilter } from '../actions/list.actions';
import { AppState, selectTodos } from '../reducers';
import { getListData } from './list.selector';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  constructor(private store : Store<AppState>) { }

  todos :Subscription;

  ngOnInit() {
    // load the todo list 
    this.todos = this.store.pipe(select(selectTodos())).subscribe((data)=>{
      console.log(data);
    })
    
  }

  onChangefilter(){
    this.store.dispatch(new ChangeFilter('checked'));
  }

  onSubmit(){
    
  }



  

}

import { Component, OnInit } from '@angular/core';
import { Todo } from '../utils/Todo';
import { Store } from '@ngrx/store';
import {Actions , ofType} from '@ngrx/effects'
import '../actions/list.actions';
import { ListActionTypes } from '../actions/list.actions';
import { AppState } from '../reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  constructor(private actions$: Actions, private store: Store<AppState>) { }

  todos : Todo[] = [
    {title : 'titleA' , description : 'Description of title A' , checked : false},
    {title : 'titleB' , description : 'Description of title B' , checked : false},
    {title : 'titleC' , description : 'Description of title C' , checked : false}
  ] 

  ngOnInit() {
    // load the todo list 
    this.store.dispatch({type : ListActionTypes.LoadLists , payload : this.todos })
  }

  onChangefilter(){


  }



  

}

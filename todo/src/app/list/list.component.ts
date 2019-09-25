import { Component, OnInit } from '@angular/core';
import { Todo } from '../utils/Todo';
import { dispatch } from 'rxjs/internal/observable/range';
import '../actions/list.actions';
import { ListActionTypes } from '../actions/list.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


const mapDispatchToProps = dispatch => ({
  onLoad : payload =>
    dispatch({type : ListActionTypes.LoadLists ,payload }),
  onUnload : () =>
    dispatch({}) 
})
export class ListComponent implements OnInit {

  constructor() { }

  public TodoList : Todo[] = [
    {
      title : "Hello world" ,
      description :"first Todo" ,
      checked : false ,
    },
    {
      title : "World Hello" ,
      description :"second   Todo" ,
      checked : false ,
    },
    {
      title : "Hello go" ,
      description :"third Todo" ,
      checked : false ,
    }
  ]; 

  ngOnInit() {
    // load the todo list 
    
  }

  onChangefilter(){

  }



  

}

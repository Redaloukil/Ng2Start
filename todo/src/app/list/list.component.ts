import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
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
    
  }

  

}

import { Component, OnInit } from '@angular/core';
import { dispatch } from 'rxjs/internal/observable/range';
import { State } from '@ngrx/store';
import { AppState } from '../reducers';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private state : State<AppState>) { }

  public title:string;
  public description:string;

  

  ngOnInit() {

  }

  addTodo(){
    const errors = this.validate();
    
  }

  modelTitleChanged(ev){
  }
  
  modelDescriptionChanged(ev){
    console.log(ev);
  }

  validate(){
    let errors;
    if (this.title.length === 0) errors.title = "Please provide a title";
    if (this.description.length === 0) errors.desdescription = "Please provide a description";
    return errors
  }
}


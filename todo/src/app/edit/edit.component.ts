import { Component, OnInit } from '@angular/core';
import { dispatch } from 'rxjs/internal/observable/range';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import * as fromList from '../actions/list.actions';
import { getEditTitleData, getEditDescriptionData } from './edit.selectors';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private store : Store<AppState>) { }

  public title:string;
  public description:string;

  

  ngOnInit() {

  }

  addTodo(){
    console.log("add todo called");
    const errors = this.validate();
    if(errors.title.length === 0 && errors.description.length === 0){
      
      this.store.dispatch(new fromList.SubmitList({title : this.title , description : this.description , checked : false}))
      this.title = "";
      this.description = "";
    }

    
  }

  modelTitleChanged(ev){
  
  }
  
  modelDescriptionChanged(ev){
  
  }

  validate(){
    var errors = {title:'' , description:''};
    if (this.title.length === 0) errors.title = "Please provide a title";
    if (this.description.length === 0) errors.description = "Please provide a description";
    console.log(errors);
    return errors
  }
}


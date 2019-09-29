import { Component, OnInit } from '@angular/core';
import { dispatch } from 'rxjs/internal/observable/range';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import * as fromEdit from '../actions/edit.actions';
import { getEditTitleData, getEditDescriptionData } from './edit.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private store : Store<AppState>) { }

  public title:Observable<string>;
  public description:Observable<string>;

  

  ngOnInit() {

  }

  addTodo(){
    const errors = this.validate();

    
  }

  modelTitleChanged(ev){
    this.store.dispatch(new fromEdit.ChangeEditTitle(ev))
    this.title = this.store.select(getEditTitleData)
  }
  
  modelDescriptionChanged(ev){
    this.store.dispatch(new fromEdit.ChangeEditDescription(ev))
    this.description = this.store.select(getEditDescriptionData)
  }

  validate(){
    let errors;
    
    return errors
  }
}


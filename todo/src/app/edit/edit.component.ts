import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }

  public title:string;
  public description:string;

  ngOnInit() {
  }

  addTodo(){
    const errors = this.validate();
    
  }


  validate(){
    let errors;
    if (this.title.length === 0) errors.title = "Please provide a title";
    if (this.description.length === 0) errors.desdescription = "Please provide a description";
    return errors
  }
}


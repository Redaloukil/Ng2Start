import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  signupForm
  
  constructor(private formBuilder:FormBuilder,private authService:AuthService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email:new FormControl('',[Validators.email , Validators.required]),
      password:new FormControl('',[Validators.required]),
      cpassword:new FormControl('',[Validators.required]),
    })
  } 
  
  get emailField(){return this.signupForm.value.email}
  get passwordField(){return this.signupForm.value.password}
  get cpasswordField(){return this.signupForm.value.cpassword}
  
  onSubmit(){
    if(this.validate){
      this.authService.signup(this.emailField , this.passwordField);
    }
  }

  validate(){
    this.passwordField() == this.cpasswordField() ? true : false;
  }
}

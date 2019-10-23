import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder , private authService:AuthService) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:new FormControl('' , [Validators.email , Validators.required]),
      password:new FormControl('' , [Validators.required]),
    })
   }
  
  get emailField(){return this.loginForm.value.email}
  get passwordField(){return this.loginForm.value.password}

  onSubmit() {
    this.authService.login(this.emailField , this.passwordField)
    
  }

  onValid(data){

  }
  
  

}
